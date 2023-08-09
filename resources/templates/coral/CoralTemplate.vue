<template>
    <div class="text-center align-middle align-self-center align-content-center justify-content-center my-5">
        <div class="container" :class="eventResponse.data.primary_typeface">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-8 col-xl-6 col-md-7 col-11">
                    <div class="hero rounded-4 p-5" :style="{backgroundColor:eventResponse.data.background_color}">
                        <ul class="list-unstyled mb-0" :style="{color:eventResponse.data.text_color }">
                            <li><h1 :class="eventResponse.data.secondary_typeface">{{ eventResponse.data.name }}</h1>
                            </li>
                            <!--                            <li><p>By: {{ eventResponse.data.organizer.name }}</p></li>-->
                            <li>
                                <small>{{ eventDate }}</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row  justify-content-center">
                <div class="col-md-8 col-lg-8 col-xl-6 col-md-7 col-11 mt-4">

                    <ul class="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link"
                                    :class="{active: activeNavClass['border-bottom']}"
                                    id="pills-home-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                    :style="{color: eventResponse.data.text_color}"
                                    aria-selected="true">Line Up
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                    :style="{color: eventResponse.data.text_color}"
                                    data-bs-target="#pills-profile" type="button" role="tab"
                                    aria-controls="pills-profile" aria-selected="false">About
                            </button>
                        </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                             aria-labelledby="pills-home-tab" tabindex="0">
                            <LineUpCard v-for="(lineup,index) in eventResponse.data.line_ups"
                                        :lineup="lineup"
                                        :event="eventResponse.data"
                                        :style="{backgroundColor:eventResponse.background_color}">
                            </LineUpCard>

                        </div>
                        <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                             aria-labelledby="pills-profile-tab" tabindex="0">
                                <span v-html="eventResponse.data.description" class="text-start">
                                </span>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import LineUpCard from "./components/LineUpCard";
import Footer from "../../components/sections/Footer";


const {
    eventResponse,
    hasData,
    isLoading,
    eventDate
} = defineProps(['eventResponse', 'hasData', 'isLoading', 'eventDate']);

const activeNavClass = ref({
    'border-bottom': `5px solid ${eventResponse.data.background_color}`
})


</script>

<style scoped>
@import "assets/css/styles.css";
@import "../theming.css";
</style>
