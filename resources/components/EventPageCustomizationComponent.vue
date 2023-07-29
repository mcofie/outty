<template>
    <div class="">
        <form @submit.prevent="$event.preventDefault()">
            <div class="row justify-content-center">
                <div class="container">
                    <div class="row justify-content-center" :class="userData.primary_typeface">
                        <div class="col-md-8">
                            <ul class="list-unstyled" :style="{color:userData.text_color }">
                                <li class="py-3 text-center">
                                    <h1 :class="userData.secondary_typeface">{{
                                            event.name
                                        }}</h1>
                                </li>
                                <li>
                                    <p class="px-4 text-center pb-0 mb-1"><span v-html="event.description"></span></p>
                                </li>
                                <li class="text-center">
                                    <small>{{ eventDate }}</small>
                                </li>
                                <li class="mt-3">
                                    <LineUpCard :event="userData" :lineup="lineup"/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div class="row justify-content-between">
                <div class="col-6">
                    <label class="form-label">Text Color</label>
                    <input type="color" v-model="userData.text_color" class="form-control form-control-color"
                           title="Choose your color">
                </div>
                <div class="col-6">
                    <label class="form-label">Background Color</label>
                    <input type="color" v-model="userData.background_color" class="form-control form-control-color"
                           title="Choose your color">
                </div>
            </div>

            <div class="row justify-content-between mt-4">
                <div class="col-6">
                    <label class="form-label">Primary Font</label>
                    <select class="form-select form-control" v-model="userData.primary_typeface"
                            aria-label="Default select example">
                        <option disabled value="">Select font</option>
                        <option v-for="font in PrimaryFonts.concat(SecondaryFonts)" :value="font.replaceAll(' ','-')">
                            {{ font }}
                        </option>
                    </select></div>
                <div class="col-6">
                    <label class="form-label">Secondary Font</label>
                    <select class="form-select form-control" v-model="userData.secondary_typeface"
                            aria-label="Default select example">
                        <option disabled value="">Select font</option>
                        <option v-for="font in PrimaryFonts.concat(SecondaryFonts)" :value="font.replaceAll(' ','-')">
                            {{ font }}
                        </option>
                    </select>
                </div>
            </div>

        </form>

        <div class="fixed-bottom">
            <div class="bottom w-100 py-3">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-9 col-xl-7">
                            <h6 class="">Theme Customization</h6>
                            <div class="d-flex justify-content-between w-100 mt-4">
                                <button @click="goToPreviousSection" class="btn btn-secondary btn-lg rounded-1">
                                    <i class="fa-solid fa-caret-left"></i>
                                </button>
                                <div>
                                    <button @click="gotoSection" class="btn btn-secondary btn-lg rounded-1 mx-2">
                                        <i class="fa-regular fa-eye"></i>
                                    </button>
                                    <button @click="goToNextSection"
                                            :class="[!v$.$invalid ? '' : 'disabled','btn btn-primary btn-lg px-5 rounded-2']">
                                        Next <i class="fa-solid fa-caret-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, watch, computed, onMounted} from 'vue'

import {PrimaryFonts, SecondaryFonts} from "../js/utils";
import {ComponentEventObject} from "../js/network/Models";
import LineUpCard from "./sections/LineUpCard";
import moment from "moment";
import {alpha, minLength, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const emit = defineEmits(['next', 'previous'])
// const props = defineProps(['eventStore', 'isEdit'])

// const event = props.eventStore.event
// const lineup = props.eventStore.lineups[0]
const store = useStore();
const router = useRouter();


const currentEventData = computed(() => store.state.event)
const event = currentEventData.value.event
const lineup = currentEventData.value.lineups[0]

const userData = ref(
    {
        background_color: event.background_color,
        text_color: event.text_color,
        primary_typeface: event.primary_typeface,
        secondary_typeface: event.secondary_typeface
    }
);

const persistUserData = () => {
    const obj = ComponentEventObject
    obj.page = 'EventPageCustomizationComponent'
    obj.data.event = Object.assign(obj.data.event, userData.value)
    return obj
}

const persistEvent = (data) => {
    store.commit('storeEventDetails', data)
}


const goToNextSection = () => {
    router.push({name: 'Organizer'})
    persistEvent(persistUserData().data)
    // emit('next', persistUserData())
}
const goToPreviousSection = () => {
    router.go(-1)
    persistEvent(persistUserData().data)
    // emit('previous', persistUserData())
}

const gotoSection = () => {
    router.push({name: 'Preview'})
    const modified = persistUserData();
    modified.page = "EventPreviewComponent"
    emit('goto', modified)
}

const eventDate = computed(() => {
    return moment(event.date).format("Do MMMM YYYY")
})

watch(userData.value, (name) => {
    persistUserData()
})

const rules = {
    text_color: {
        required, $autoDirty: true,
    },
    background_color: {required, $autoDirty: true},
    primary_typeface: {required, $autoDirty: true},
    secondary_typeface: {required, $autoDirty: true}
}

const v$ = useVuelidate(rules, userData)

onMounted(() => {
    // console.log(props.eventStore)
})


</script>

<style scoped>
@import "theming.css";
</style>
