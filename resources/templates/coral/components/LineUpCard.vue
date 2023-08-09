<template>
    <div>
        <div>
            <ul class="list-unstyled text-start" :style="{color:'black'}">
                <li>
                    <div class="d-flex justify-content-between align-self-center">
                        <h6 class="font-bold my-2" :style="{color:event.text_color}">
                            {{ lineup.title }}</h6>
                        <small class="fw-bold align-self-center">{{ startTime(lineup.start_time) }} - {{ endTime(lineup.end_time) }}</small>
                    </div>
                </li>
                <li>
                    <span v-html="lineup.description">
                    </span>
                </li>
                <li>
                    <hr>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import moment from "moment";
import {computed} from "vue";
import {diffs} from "../../../js/helper";

const props = defineProps(['lineup', 'event'])
const lineup = props.lineup
const event = props.event

const startTime = (time) => {
    return moment(time, 'HH:mm').format('h:mm A');
}


const endTime = (time) => {
    if (time !== null) {
        return moment(time, 'HH:mm').format('h:mm A');
    }
    return "";
}

const isLive = computed(() => {
    return diffs({startTIme: lineup.start_time, endTime: lineup.end_time})
})

</script>

<style scoped>

</style>
