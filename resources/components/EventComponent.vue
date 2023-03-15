<template>
    <div class="card">
        <form @submit.prevent="$event.preventDefault()">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Event name</label>
                <input type="text" v-model="userData.name" class="form-control" id="exampleFormControlInput1"
                       placeholder="">
                <div class="">
                    <small v-show="slugLookup.state === 1" class="text-success"> {{ slugLookup.message }}</small>
                    <small v-show="slugLookup.state === 0" class="text-danger"> {{ slugLookup.message }}</small>
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                <textarea class="form-control" v-model="userData.description" id="exampleFormControlTextarea1"
                          rows="3"></textarea>
            </div>

            <div class="row justify-content-between">
                <div class="col-6">
                    <label for="exampleFormControlInput1" class="form-label">Event Date</label>
                    <VueDatePicker v-model="userData.date" class="form-control"
                                   :format="format"
                                   :min-date="new Date()"
                                   placeholder="00/00/0000" text-input auto-apply :enable-time-picker="false"/>
                </div>
                <div class="col-6">
                    <label class="form-label">Event Type</label>
                    <select class="form-select form-control" v-model="userData.event_type"
                            aria-label="Default select example">
                        <option disabled value="">Select Event Type</option>
                        <option v-for="type in EventTypes" :value="type">{{ type }}</option>
                    </select>
                </div>
                <div class="col-4 d-none">
                    <label for="exampleFormControlInput1" class="form-label">Event image</label>
                    <input type="file" ref="getFile" style="display:none" class="form-control" placeholder="">
                    <div class="d-flex w-100 justify-content-evenly">
                        <button
                            class="btn btn-secondary btn-lg disabled rounded-2 py-2">
                            <i class="fa-regular fa-image"></i>
                        </button>
                        <button
                            @click="getFile.click()"
                            class="btn btn-secondary btn-lg px-5 rounded-2 py-2">
                            Select
                        </button>
                    </div>
                </div>
            </div>
        </form>

        <div class="fixed-bottom">
            <div class="bottom w-100 py-3">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-7">
                            <h6 class="mx-4">Event Details</h6>
                            <div class="d-flex justify-content-end w-100 mt-4">
                                <button class="btn btn-secondary btn-lg rounded-1 d-none">
                                    <i class="fa-solid fa-caret-left"></i>
                                </button>
                                <button @click="goToNextSection" class="btn btn-primary btn-lg px-5 rounded-2">
                                    Next <i class="fa-solid fa-caret-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, computed, onMounted, reactive, watch} from 'vue'
import debounce from 'lodash.debounce'

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {ComponentEventObject} from "../js/network/Models";
import {useStore} from 'vuex'
import {EventTypes, slugify} from "../js/utils";
import {format} from "../js/helper";
import Requester from "../js/network/Requester";
import {APIs} from "../js/network/APIs";


const store = useStore()
const emit = defineEmits(['next'])
const props = defineProps(['eventStore'])
const event = props.eventStore.event

const currentEventData = computed(() => store.state.event)
const getFile = ref(null)
const slugLookup = ref({
    message: '',
    state: -1
})

const userData = ref(
    {
        name: event.name,
        description: event.description,
        slug: slugify(event.name),
        event_type: event.event_type,
        date: event.date
    }
);

const checkSlugAvailability = debounce((n) => {
    Requester.makeRequest({path: `${APIs.slug}${slugify(n)}`})
        .then((response) => {
            slugLookup.value.state = 1
            slugLookup.value.message = response.data.message
        })
        .catch((error) => {
            slugLookup.value.state = 0
            slugLookup.value.message = error.response.data.message
        })
}, 500)

watch(() => userData.value.name, (name) => {
    if (name.replace(/ /g, '').length >= 0) {
        checkSlugAvailability(name)
    } else {
        slugLookup.value.state = -1
    }
})


const persistUserData = () => {
    const obj = ComponentEventObject
    obj.page = 'EventComponent'
    obj.data.event = Object.assign(obj.data.event, userData.value)
    return obj
}

const goToNextSection = () => emit('next', persistUserData())

onMounted(() => {
    // console.log(props.eventStore.event)
    // some++
})

</script>

<style scoped>

</style>
