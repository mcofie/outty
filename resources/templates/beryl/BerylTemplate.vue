<template>
    <div class="text-center align-middle align-self-center align-content-center justify-content-center py-5"
         :style="{backgroundColor: eventResponse.data.background_color}">
        <div class="container" :class="eventResponse.data.primary_typeface">
            <div class="row justify-content-center">
                <div class="col-md-8 col-lg-8 col-xl-6 col-md-7 col-12">
                    <div class="hero rounded-4 py-lg-3 px-3 py-3 px-lg-5">
                        <ul class="list-unstyled mb-0" :style="{color:eventResponse.data.text_color }">
                            <li><p>{{ eventResponse.data.organizer.name }} Presents</p></li>
                            <li><h1 :class="eventResponse.data.secondary_typeface">{{ eventResponse.data.name }}</h1>
                            </li>
                            <li>
                                <hr class="border-2 mx-5"
                                    :style="{borderColor:eventResponse.data.text_color}">
                            </li>
                            <li>
                                <small>{{ eventDate }}</small>
                            </li>
                            <li>
                                <span :style="{color:eventResponse.data.text_color}"
                                      v-html="eventResponse.data.description"></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row  justify-content-center">
                <div class="col-md-8 col-lg-8 col-xl-6 col-md-7 col-11">
                    <LineUpCard v-for="(lineup,index) in eventResponse.data.line_ups"
                                :key="index"
                                :lineup="lineup"
                                :event="eventResponse.data"
                                :style="{backgroundColor:eventResponse.background_color}">
                    </LineUpCard>
                </div>
            </div>
            <div>
                <Footer></Footer>
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
