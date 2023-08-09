<template>
    <div>
        <div class="my-5">
            <ul class="list-unstyled text-center" :style="{color:event.text_color}">
                <li class="my-1">
                    <h5 class="font-bold fs-5" :style="{color:event.text_color}">
                        {{ lineup.title }}</h5>
                </li>
                <li class="mb-2">
                    <small class="">{{ startTime(lineup.start_time) }} - {{ endTime(lineup.end_time) }}</small>
                </li>
                <li>
                    <span v-html="lineup.description">
                    </span>
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
