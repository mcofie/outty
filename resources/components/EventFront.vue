<template>
    <div class="text-center align-middle align-self-center align-content-center justify-content-center">
        <div v-if="!isLoading" class="container" :class="eventResponse.data.primary_typeface">
            <div v-if="hasData">
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
            <div v-else class="align-middle">
                <EmptyState title="No data"
                            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></EmptyState>
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
import EmptyState from "./sections/EmptyState";


const eventResponse = ref(GetEvent)
const isLoading = ref(true)
const route = useRoute()
const router = useRouter()
const hasData = ref(true)


onBeforeMount(() => {
    const slug = location.pathname.replace('/the-outline/', '')
    getEvent({slug: slug})
})

const eventDate = computed(() => {
    return moment(eventResponse.value.data.date).format("Do MMMM YYYY")
})


const getEvent = ({slug}) => {
    Requester.makeRequest({path: `${APIs.getEvent}/${slug}`, method: 'GET'})
        .then((response) => {
            eventResponse.value = Object.assign(GetEvent, response.data);
            console.log(eventResponse.value);
            isLoading.value = false
        })
        .catch((error) => {
            isLoading.value = false

            if (error.response.data.status === 404) {
                hasData.value = false
            }
        })
}


onMounted(() => {
    // console.log(route)
})


</script>

<style scoped>
@import "theming.css";
</style>
