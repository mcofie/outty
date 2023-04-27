<template>
    <div class="card border border-opacity-10 rounded mb-3"
         :style="{backgroundColor:event.background_color}">
        <div class="card-body p-0 text-start" :style="{color:event.text_color}">
            <a>
                <div class="d-flex w-100 justify-content-between">
                    <ul class="list-unstyled w-100 mb-0">
                        <li class="w-100">
                            <div class="d-flex w-100 justify-content-between">
                                <small>{{ startTime(lineup.start_time) }} - {{ endTime(lineup.end_time) }}</small>
                                <span v-show="isLive"
                                      class="badge text-bg-dark animate__animated animate__pulse animate__infinite infinite">Live</span>
                            </div>
                        </li>
                        <li>
                            <h6 class="mb-1" style="font-weight: bolder">{{ lineup.title }}</h6>
                        </li>
                        <li>
                            <p class="my-2">{{ lineup.description }}</p>
                        </li>
                    </ul>

                </div>
            </a>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import moment from 'moment'
import {diffs, formatTime} from "../../js/helper";

const props = defineProps(['lineup', 'event'])
const lineup = props.lineup
const event = props.event

const startTime = (time) => {
    return moment(formatTime(time)).format('LT');
}

const endTime = (time) => {
    return moment(formatTime(time)).format('LT');
}

const isLive = computed(() => {
    return diffs({startTIme: lineup.start_time, endTime: lineup.end_time})
})

</script>

<style scoped>

.active_lineup {

}

</style>
