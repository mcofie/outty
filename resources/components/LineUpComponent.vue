<template>
    <div class="card">
        <form @submit.prevent="$event.preventDefault()">
            <div v-for="(lineup,index) in lineups" class="mb-5">
                <div class="row justify-content-end">
                    <div class="col-1">
                        <button class="btn btn-secondary btn-lg disabled rounded-1"
                                style="height: 50px;" disabled>
                            <h4>{{ index + 1 }}</h4>
                        </button>
                    </div>
                    <div class="col-5">
                        <div class="d-flex justify-content-between">
                            <h6>
                                Start time
                            </h6>
                            <VueDatePicker v-model="lineups[index].start_time" time-picker class="form-control"
                                           placeholder="00:00"
                                           :is-24="false"
                                           auto-apply
                                           text-input/>
                        </div>
                    </div>


                    <div class="col-5">
                        <div class="d-flex justify-content-between">
                            <h6>
                                End time
                            </h6>
                            <VueDatePicker v-model="lineups[index].end_time" time-picker class="form-control"
                                           placeholder="00:00"
                                           :is-24="false"
                                           auto-apply
                                           text-input/>
                        </div>
                    </div>

                    <div class="col-1">
                        <button class="btn btn-secondary btn-lg rounded-1"
                                style="height: 50px;">
                            <i class="fa-solid fa-caret-down"></i>
                        </button>
                    </div>
                </div>
                <div class="row justify-content-center my-3">
                    <div class="col-12">
                        <input type="text" v-model="lineups[index].title" class="form-control">
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
                                <textarea v-model="lineups[index].description" class="form-control" rows="3"></textarea>
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
                        <div class="col-md-7">
                            <h6 class="">Programme Lineup</h6>
                            <div class="d-flex justify-content-between w-100 mt-4">
                                <button @click="goToPreviousSection" class="btn btn-secondary btn-lg rounded-1">
                                    <i class="fa-solid fa-caret-left"></i>
                                </button>
                                <button @click="goToNextSection" class="btn btn-primary btn-lg px-5 rounded-2">
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
import {ref, toRaw} from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {ComponentEventObject} from "../js/network/Models";
import {formatTime} from "../js/helper";

const emit = defineEmits(['next', 'previous'])
const props = defineProps(['eventStore'])
const pLineups = props.eventStore.lineups

const time = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes()
};


const lineups = ref(pLineups)

const addLineUp = () => {
    lineups.value.push({
        title: "",
        description: "",
        start_time: time,
        end_time: time
    })
}

const persistUserData = () => {
    const obj = ComponentEventObject
    obj.page = 'LineUpComponent'
    obj.data.lineups = Object.assign(obj.data.lineups, toRaw(lineups.value))
    return obj
}

const goToNextSection = () => emit('next', persistUserData())
const goToPreviousSection = () => emit('previous', persistUserData())


</script>

<style scoped>

</style>
