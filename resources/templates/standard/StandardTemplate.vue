<template>
    <div class="text-center align-middle align-self-center align-content-center justify-content-center">
        <div v-if="!isLoading" class="container" :class="eventResponse.data.primary_typeface">
            <div v-if="hasData">
                <div v-if="showForm">
                    <div class="row justify-content-center mt-5 mb-3">
                        <div class="col-md-8 col-lg-8 col-xl-6 col-md-7 col-11 text-center">
                            <div class="d-flex justify-content-end d-none">
                                <i class="fa-solid fa-language fs-2"></i>
                            </div>
                            <ul class="list-unstyled" :style="{color:eventResponse.data.text_color }">
                                <li class="pt-3">
                                    <h1 :class="eventResponse.data.secondary_typeface">{{
                                            eventResponse.data.name
                                        }}</h1>
                                </li>
                                <li class="mb-3">
                                    <small>
                                    <span class="badge text-bg-dark">
                                        {{ eventResponse.data.organizer.name }}
                                    </span>
                                    </small>
                                </li>
                                <li>
                                    <p class="px-4"><span v-html="eventResponse.data.description"></span></p>
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
                            <LineUpCardAlt v-for="(lineup,index) in eventResponse.data.line_ups" :lineup="lineup"
                                           :event="eventResponse.data" :key="index"/>
                        </div>
                    </div>
                </div>
                <UserRegistration @switch-view="register" :event="eventResponse" v-else></UserRegistration>
            </div>
            <div v-else>
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8 col-md-8 col-sm-8 col-10">
                        <EmptyState title="No data"
                                    message="Oops! It seems like the content you're looking for isn't available at the moment. We apologize for any inconvenience caused. "></EmptyState>
                    </div>
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
import {onMounted, ref, toRaw} from "vue";
import LineUpCardAlt from "./components/LineUpCardAlt";
import EmptyState from "./components/EmptyState";
import Footer from "./components/Footer";
import UserRegistration from "./components/UserRegistration";
import Requester from "../../js/network/Requester";
import {APIs} from "../../js/network/APIs";
import {isIdPresent, persistRegisteredUser} from "./misc/helper";
import {GetEvent} from "../../js/network/Models";


const {
    eventResponse,
    hasData,
    isLoading,
    eventDate,
    hasRegistration
} = defineProps(['eventResponse', 'hasData', 'isLoading', 'eventDate', 'hasRegistration']);


const hasUserRegistered = () => {

    if (localStorage.getItem('registered') != null && eventResponse.data.registers_guests === 1) {
        if (isIdPresent(eventResponse.data.id)) {
            return false
        } else {
            return true
        }
    } else if (localStorage.getItem('registered') == null && eventResponse.data.registers_guests === 1) {
        console.log("C")
        return true
    }
    console.log("D")
    return false
}
// const showForm = ref(hasUserRegistered())
const showForm = ref(true)

//

const view = (data) => {
    // console.log(data)
    // showForm.value = true
}


const register = (data) => {

    //Add event id to the request
    data.event_id = eventResponse.data.id
    Requester.makeRequest({path: `${APIs.registry}`, method: 'POST', data: data})
        .then((response) => {
            persistRegisteredUser(data.event_id)
        })
        .catch((error) => {
            // isLoading.value = false
            // if (error.response.data.status === 404) {
            //     hasData.value = false
            // }
        })
}

</script>

<style scoped>
@import "../theming.css";
</style>
