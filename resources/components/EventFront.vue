<template>
    <div class="text-center align-middle align-self-center align-content-center justify-content-center">
        <div v-if="!isLoading" class="container" :class="eventResponse.data.primary_typeface">
            <div class="row justify-content-center mt-5 mb-3">
                <div class="col-md-8 col-lg-8 col-xl-6 col-md-7 col-11 text-center">
                    <ul class="list-unstyled" :style="{color:eventResponse.data.text_color }">
                        <li class="py-3">
                            <h1 :class="eventResponse.data.secondary_typeface">{{ eventResponse.data.name }}</h1>
                        </li>
                        <li>
                            <p class="px-4">{{ eventResponse.data.description }}</p>
                        </li>
                        <li>
                            <small>{{ eventDate }}</small>
                        </li>
                        <li>
                            <!--                        <hr/>-->
                        </li>
                    </ul>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-8 col-xl-6 col-md-7 col-11">
                    <LineUpCard v-for="(lineup,index) in eventResponse.data.line_ups" :lineup="lineup"
                                :event="eventResponse.data" :key="index"/>
                </div>
            </div>
        </div>
        <div v-else class="d-flex justify-content-center">
            <div class="spinner-grow text-secondary mt-5" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <Footer/>
    </div>
</template>

<script setup>
import Requester from "../js/network/Requester";
import {GetEvent} from "../js/network/Models";
import {computed, onBeforeMount, onMounted, ref, toRaw, watch} from "vue";
import {useRoute, useRouter} from 'vue-router'
import LineUpCard from "./sections/LineUpCard";
import moment from "moment";
import Footer from "./sections/Footer";
import {APIs} from "../js/network/APIs";


const eventResponse = ref(GetEvent)
const isLoading = ref(true)
const route = useRoute()
const router = useRouter()


onBeforeMount(() => {
    getEvent()
})

const eventDate = computed(() => {
    console.log(eventResponse.value.data)
    return moment(eventResponse.value.data.date).format("Do MMMM YYYY")
})


const getEvent = () => {
    Requester.makeRequest({path: `${APIs.getEvent}/new-wave-thingy`, method: 'GET'})
        .then((response) => {
            eventResponse.value = Object.assign(GetEvent, response.data);
            isLoading.value = false
        })
        .catch((error) => {
            isLoading.value = false
            console.log(error.response.data)
        })
}


onMounted(() => {
    // console.log(route)
})


</script>

<style scoped>
@import "theming.css";
</style>
