<template>
    <div class="container">
        <div v-if="!isLoading">
            <div v-if="hasData">
                <div class="row justify-content-center mt-5">
                    <div class="col-md-9 col-lg-7 col-xxl-6 col-xl-6 col-10 col-sm-10 text-start">
                        <ul class="list-unstyled">
                            <li>
                                <h1>Hi, {{ eventResponse.organizer.name }}</h1>
                            </li>
                            <li class="mt-5">
                                <h5 class="text-capitalize mt-3">UPCOMING EVENTS</h5>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div v-for="event in eventResponse.events"
                         class="col-md-9 col-lg-7 col-xxl-6 col-xl-6 col-10 col-sm-10 ">
                        <div class="card border border-opacity-10 rounded my-2">
                            <div class="card-body p-0 text-start">
                                <a :href="event.id+'/edit?token='+token">
                                    <div class="d-flex w-100 justify-content-between">
                                        <ul class="list-unstyled w-100 mb-0">
                                            <li class="w-100">
                                                <div class="d-flex w-100 justify-content-between">
                                                    <small>{{ eventDate(event.date) }}</small>
                                                </div>
                                            </li>
                                            <li>
                                                <h6 class="mb-0" style="font-weight: bolder"> {{ event.name }}</h6>
                                            </li>
                                            <li>
                                                <small class="mt-2">{{ event.category }}</small>
                                            </li>
                                        </ul>

                                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                    </div>
                                </a>
                            </div>
                        </div>
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
import {APIs} from "../js/network/APIs";
import {onMounted, ref, computed, onBeforeMount} from "vue";
import EmptyState from "./sections/EmptyState";
import {ListOfEvents} from "../js/network/Models";
import moment from "moment";
import Footer from "./sections/Footer";

const eventResponse = ref(ListOfEvents)
const token = ref('')
const isLoading = ref(true)
const hasData = ref(true)


const getEvents = ({token}) => {
    Requester.makeRequest({path: `${APIs.getEventsByOrganizer}/${token}/events`, method: 'GET'})
        .then((response) => {
            eventResponse.value = Object.assign(ListOfEvents, response.data.data);
            console.log(eventResponse.value)
            isLoading.value = false

        })
        .catch((error) => {
            isLoading.value = false
            if (error.response.data.status === 404) {
                hasData.value = false
            }
        })
}

const eventDate = (date) => {
    return `${moment(date).format("Do MMMM YYYY")} [${moment(date).fromNow()}]`

}


onBeforeMount(() => {

    const urlParams = new URLSearchParams(window.location.search);
    token.value = urlParams.get('token');

    if (token.value != null) {
        getEvents({token: token.value})
    }

})

</script>

<style scoped>

</style>
