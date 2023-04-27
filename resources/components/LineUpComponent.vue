<template>
    <div class="card">
        <form @submit.prevent="$event.preventDefault()">
            <div v-for="(lineup,index) in lineups" class="mb-5">
                <div class="row justify-content-end">
                    <div class="col-1 g-0">
                        <button class="btn btn-secondary btn-lg disabled rounded-1 w-100"
                                style="height: 50px;" disabled>
                            <h4>{{ index + 1 }}</h4>
                        </button>
                    </div>
                    <div class="col-5 g-0">
                        <div class="d-flex justify-content-between">
                            <h6 class="text-center">
                                Start time
                            </h6>
                            <VueDatePicker v-model="lineup.start_time" time-picker class="form-control mx-2"
                                           placeholder="00:00"
                                           :is-24="false"
                                           auto-apply
                                           text-input/>
                        </div>
                    </div>


                    <div class="col-5 g-0">
                        <div class="d-flex justify-content-between">
                            <h6 class="text-center">
                                End time
                            </h6>
                            <VueDatePicker v-model="lineup.end_time" time-picker class="form-control mx-2"
                                           placeholder="00:00"
                                           :is-24="false"
                                           auto-apply
                                           text-input/>
                        </div>
                    </div>

                    <div class="col-1 g-0 text-end">
                        <button @click="deleteLineUp(index)" class="btn btn-danger btn-lg rounded-1"
                                style="height: 50px;">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="row justify-content-center my-3">
                    <div class="col-12 g-0">
                        <input type="text" v-model="lineup.title" class="form-control" required
                               @keyup="checkIfNotEmpty(lineup.title)">
                    </div>
                </div>

                <div class="accordion accordion-flush" :id="`accordion${index}`">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button px-0" type="button" data-bs-toggle="collapse"
                                    :data-bs-target="`#collapse${index}`" aria-expanded="true"
                                    aria-controls="collapseOne">
                                Description
                            </button>
                        </h2>
                        <div :id="`collapse${index}`" class="accordion-collapse collapse" aria-labelledby="headingOne"
                             :data-bs-parent="`#accordion${index}`">
                            <div class="accordion-body p-0">
                                <textarea v-model="lineup.description" class="form-control" rows="3"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="d-flex justify-content-end">
                <button @click="addLineUp" class="btn btn-secondary btn-lg rounded-1">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>

        </form>

        <div class="fixed-bottom">
            <div class="bottom w-100 py-3">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-9 col-xl-7">
                            <h6 class="">Programme Lineup</h6>
                            <div class="d-flex justify-content-between w-100 mt-4">
                                <button @click="goToPreviousSection" class="btn btn-secondary btn-lg rounded-1">
                                    <i class="fa-solid fa-caret-left"></i>
                                </button>
                                <button @click="goToNextSection"
                                        :class="[isButtonActive ? '' : 'disabled','btn btn-primary btn-lg px-5 rounded-2']">
                                    Next <i class="fa-solid fa-caret-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, toRaw, watch, computed} from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {ComponentEventObject} from "../js/network/Models";
import {checkIfArrayHasValues, formatTime} from "../js/helper";
import debounce from "lodash.debounce";

const emit = defineEmits(['next', 'previous'])
const props = defineProps(['eventStore'])
const pLineups = props.eventStore.lineups
const isButtonActive = ref(true)

const time = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes()
};


const lineups = ref(pLineups)

const addLineUp = () => {
    isButtonActive.value = false
    lineups.value.push({
        title: "",
        description: "",
        start_time: time,
        end_time: time
    })
}

const fTime = (t) => {
    formatTime(t)
}

const persistUserData = () => {
    const obj = ComponentEventObject
    obj.page = 'LineUpComponent'
    obj.data.lineups = Object.assign(obj.data.lineups, toRaw(lineups.value))
    return obj
}
const deleteLineUp = (index) => {
    if (lineups.value.length >= 2) {
        lineups.value.splice(index, 1)
    }
}
const goToNextSection = () => emit('next', persistUserData())
const goToPreviousSection = () => emit('previous', persistUserData())

const checkIfNotEmpty = (data) => {
    isButtonActive.value = data.length !== 0;
}


</script>

<style scoped>

</style>
