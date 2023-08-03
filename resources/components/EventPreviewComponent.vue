<template>
    <div>
        <div class="my-5">
            <div class="d-flex justify-content-end w-100 mt-4">
                <button @click="goToPreviousSection" class="btn btn-secondary btn-lg rounded-5" style="padding:12px 22px">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
        <div class="container" :class="event.primary_typeface">
            <div class="row justify-content-center">
                <div class="col-md-10 text-center">
                    <ul class="list-unstyled" :style="{color:event.text_color }">
                        <li class="py-3">
                            <h1 :class="event.secondary_typeface">{{ event.name }}</h1>
                        </li>
                        <li>
                            <p class="px-4"><span v-html="event.description"></span></p>
                        </li>
                        <li>
                            <small>{{ eventDate }}</small>
                        </li>
                        <li>
                            <!--                        <hr/>-->
                        </li>
                    </ul>
                </div>

                <div class="col-md-10">
                    <LineUpCard v-for="(lineup,index) in lineups" :lineup="lineup" :event="event" :key="index"/>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
</template>

<script setup>
import {ComponentEventObject} from "../js/network/Models";
import {onMounted, onUpdated, ref, computed, toRefs} from 'vue'
import {useStore} from 'vuex'
import LineUpCard from "./sections/LineUpCard";
import moment from 'moment'
import Footer from "./sections/Footer";
import {useRouter} from "vue-router";


const store = useStore()
const router = useRouter()
const currentEventData = computed(() => store.state.event)

// const emit = defineEmits(['previous'])
// const props = defineProps(['eventStore'])

//
// const event = props.eventStore.event
// const lineups = props.eventStore.lineups

const event = currentEventData.value.event
const lineups = currentEventData.value.lineups

const persistUserData = () => {
    const obj = ComponentEventObject
    obj.page = 'EventOrganizerComponent'
    return obj
}

onMounted(() => {
    // console.log(props.eventStore)
})

const eventDate = computed(() => {
    return moment(event.date).format("Do MMMM YYYY")
})

const goToPreviousSection = () => {
    router.go(-1)
    emit('previous', persistUserData())
}



</script>

<style scoped>
@import "theming.css";
</style>
