<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 col-lg-9 col-xl-7">
                <div v-if="!isLoading" class="container">
                    <div class="row">
                        <nav class="navbar py-3 px-2">
                            <div class="container p-0">
                                <div class="d-flex justify-content-start text-start w-100">
                                    <ul class="list-unstyled pb-0 mb-0">
                                        <li class="mb-1">
                                            <h4><a class="navbar-brand fs-3"
                                                   href="/" target="_blank"> <i class="fa-solid fa-caret-right"></i>
                                                outty.co/<span class="fs-5"
                                                               style="color: #a0a0a0 !important; font-weight: normal !important;">
                                                    {{ slugify(store.getters.eventStore.event.name) }}
                                                </span></a>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div class="col-md-12 mb-5">
                            <div class="progress" role="progressbar" aria-label="Basic example"
                                 aria-valuenow="15"
                                 aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar" :style="{ width: pageProgress + '%'}"></div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <component :is="sections[currentSection]"
                                   @goto="gotoSection"
                                   @checkout="gotoCheckout"
                                   @next="onNextSection"
                                   :event-store="currentEventData"
                                   :event-response="eventResponse"
                                   :is-edit="isEdit"
                                   @previous="onPreviousSection"></component>
                    </div>
                </div>
                <div v-else class="container">
                    <div class="d-flex justify-content-center">
                        <div class="spinner-grow text-secondary mt-5" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, onBeforeMount, ref} from 'vue'
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
import {formatTime, reverseTimeFormat} from "../js/helper";
import {CreateEventLineUp, CreateEventResponse, GetEvent} from "../js/network/Models";
import {slugify} from "../js/utils";

const eventId = ref('')
const isLoading = ref(true)
const store = useStore()

const currentSection = ref('EventComponent')
const eventResponse = ref(CreateEventResponse.data)
const eventApiResponse = ref(GetEvent.data)
const sections = {
    EventComponent,
    LineUpComponent,
    PaymentSuccessComponent,
    PaymentRedirectionComponent,
    EventPageCustomizationComponent,
    EventOrganizerComponent,
    EventPreviewComponent
}
const pageProgress = ref(20)
const isEdit = ref('false')
const currentEventData = ref(store.getters.eventStore)


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

    switch (currentSection.value) {
        case appSections[0]:
            pageProgress.value = 20;
            break;
        case  appSections[1]:
            pageProgress.value = 45;
            break;
        case appSections[2]:
            pageProgress.value = 65;
            break;
        case appSections[3]:
            pageProgress.value = 85;
            break;
        case appSections[4]:
            pageProgress.value = 97;
            break;
    }
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
    createEvent({data: currentEventData.value})
}

const onPreviousSection = (n) => {
    persistEvent(n.data)
    findSection(n, 'previous')
}


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

onBeforeMount(() => {
    const url = location.pathname;
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');


    if (url.includes('/edit')) {
        isEdit.value = true
        eventId.value = url.replace('/the-outline/', '').replace('/edit', '')
        getEvent({id: eventId.value})
    }

})

const getEvent = ({id}) => {
    Requester.makeRequest({path: `${APIs.getEventById}/${id}`, method: 'GET'})
        .then((response) => {
            isLoading.value = false
            eventApiResponse.value = Object.assign(GetEvent, response.data.data);
            let eventLineUp = {}
            eventLineUp.event = {
                id: eventApiResponse.value.id,
                name: eventApiResponse.value.name,
                date: eventApiResponse.value.date,
                slug: eventApiResponse.value.slug,
                category: eventApiResponse.value.category,
                description: eventApiResponse.value.description,
                primary_typeface: eventApiResponse.value.primary_typeface,
                secondary_typeface: eventApiResponse.value.secondary_typeface,
                text_color: eventApiResponse.value.text_color,
                background_color: eventApiResponse.value.background_color,
            }
            eventLineUp.user = eventApiResponse.value.organizer

            let lineupsArray = []
            eventApiResponse.value.line_ups.forEach((event) => {
                lineupsArray.push({
                    id: event.id,
                    title: event.title,
                    description: event.description,
                    start_time: {
                        hours: moment(event.start_time, 'HH:mm').hours(),
                        minutes: moment(event.start_time, 'HH:mm').minutes()
                    },
                    end_time: {
                        hours: moment(event.end_time, 'HH:mm').hours(),
                        minutes: moment(event.end_time, 'HH:mm').minutes()
                    }
                })
            })
            eventLineUp.lineups = lineupsArray
            console.log(eventLineUp)
            //Set in store and persist
            //Then call values to events
            persistEvent(eventLineUp)
            console.log(store.getters.eventStore)
            currentEventData.value = store.getters.eventStore

        })
        .catch((error) => {
            isLoading.value = false
            // console.log(error)
        })
}

</script>

<style scoped>

</style>
