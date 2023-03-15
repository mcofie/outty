<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-7">
                <div class="container">
                    <div class="row">
<!--                        <KeepAlive>-->
                            <component :is="sections[currentSection]"
                                       @goto="gotoSection"
                                       @next="onNextSection"
                                       :event-store="currentEventData"
                                       @previous="onPreviousSection"></component>
<!--                        </KeepAlive>-->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue'
import Requester from "../js/network/Requester";
import EventComponent from "./EventComponent";
import LineUpComponent from "./LineUpComponent";
import PaymentSuccessComponent from "./PaymentSuccessComponent";
import PaymentRedirectionComponent from "./PaymentRedirectionComponent";
import EventPageCustomizationComponent from "./EventPageCustomizationComponent";
import EventOrganizerComponent from "./EventOrganizerComponent";
import EventPreviewComponent from "./EventPreviewComponent";

import {useStore} from 'vuex'

const store = useStore()

const currentSection = ref('EventComponent')
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

const onPreviousSection = (n) => {
    persistEvent(n.data)
    findSection(n, 'previous')
}

const currentEventData = computed(() => store.state.event)


const persistEvent = (data) => {
    store.commit('storeEventDetails', data)
}


onMounted(() => {
    // Requester.makeRequest({
    //     path:"events/ps-er",baseUrl:"",method:"GET"
    // }).then((response)=>{
    //     console.log(response.data.data)
    // }).catch()
})


</script>

<style scoped>

</style>
