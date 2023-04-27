<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 col-lg-9 col-xl-7">
                <div class="container">
                    <div class="row">
                        <nav class="navbar py-3 px-2">
                            <div class="container">
                                <div class="d-flex justify-content-start text-start w-100">
                                    <ul class="list-unstyled pb-0 mb-0">
                                        <li class="mb-1">
                                            <h4><a class="navbar-brand text-decoration-underline fs-3"
                                                   href="/">outty.co</a>
                                            </h4>
                                        </li>
                                        <li>
                                            <p class="text-secondary opacity-75">
                                                Their appearance, alignment, and sizing can be easily customized with
                                                our
                                                <br/>amazing utility classes.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="row">
                        <component :is="sections[currentSection]"
                                   @goto="gotoSection"
                                   @checkout="gotoCheckout"
                                   @next="onNextSection"
                                   :event-store="currentEventData"
                                   :event-response="eventResponse"
                                   @previous="onPreviousSection"></component>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue'
import {useRoute} from 'vue-router';
import moment from "moment";
import Requester from "../js/network/Requester";
import EventComponent from "./EventComponent";
import LineUpComponent from "./LineUpComponent";
import PaymentSuccessComponent from "./PaymentSuccessComponent";
import PaymentRedirectionComponent from "./PaymentRedirectionComponent";
import EventPageCustomizationComponent from "./EventPageCustomizationComponent";
import EventOrganizerComponent from "./EventOrganizerComponent";
import EventPreviewComponent from "./EventPreviewComponent";

import {useStore} from 'vuex'
import {APIs} from "../js/network/APIs";
import {formatTime} from "../js/helper";
import {CreateEventResponse} from "../js/network/Models";
import {slugify} from "../js/utils";

const store = useStore()

const currentSection = ref('EventComponent')
const eventResponse = ref(CreateEventResponse.data)
const sections = {
    EventComponent,
    LineUpComponent,
    PaymentSuccessComponent,
    PaymentRedirectionComponent,
    EventPageCustomizationComponent,
    EventOrganizerComponent,
    EventPreviewComponent
}


const findSection = (section, navigation) => {
    const appSections = [
        "EventComponent",
        "LineUpComponent",
        "EventPageCustomizationComponent",
        "EventOrganizerComponent",
        "PaymentRedirectionComponent",
        "PaymentSuccessComponent",
    ]

    let index = 0
    if (navigation === 'previous') {
        index = appSections.indexOf(section.page) - 1
    } else if (navigation === 'next') {
        index = appSections.indexOf(section.page) + 1
    }

    if (index >= appSections.length) {
        currentSection.value = section.page
    }
    currentSection.value = appSections[index]
}

const onNextSection = (n) => {
    persistEvent(n.data)
    findSection(n, 'next')
}

const gotoSection = (name) => {
    persistEvent(name.data)
    currentSection.value = name.page
}


const gotoCheckout = (name) => {
    persistEvent(name.data)
    currentEventData.value.event.slug = slugify(currentEventData.value.event.name)
    currentEventData.value.event.date = moment(currentEventData.value.event.date).format("YYYY-MM-DD");
    currentEventData.value.lineups.map((lineup) => {
        lineup.start_time = moment(formatTime(lineup.start_time)).format('h:mm')
        lineup.end_time = moment(formatTime(lineup.end_time)).format('h:mm')
    })
    console.log(currentEventData.value)
    createEvent({data: currentEventData.value})
    //
}

const onPreviousSection = (n) => {
    persistEvent(n.data)
    findSection(n, 'previous')
}

const currentEventData = computed(() => store.getters.eventStore)


const createEvent = ({data}) => {
    Requester.makeRequest({data: data, path: `${APIs.createEvent}`, method: 'POST'})
        .then((response) => {
            localStorage.removeItem('eventStore')
            eventResponse.value = Object.assign(CreateEventResponse.data, response.data.data)
            currentSection.value = 'PaymentRedirectionComponent'
        })
        .catch((error) => {
            console.log(error.response.data)
        })
}


const persistEvent = (data) => {
    store.commit('storeEventDetails', data)
}


// onMounted(() => {
//
// })


</script>

<style scoped>

</style>
