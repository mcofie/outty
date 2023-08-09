<template>
    <component :is="templates[selectedTemplate]" :eventResponse="eventResponse"
               :hasData="hasData"
               :isLoading="isLoading"
               :eventDate="eventDate">
    </component>

</template>

<script setup>
import Requester from "../js/network/Requester";
import {GetEvent, GetTemplate} from "../js/network/Models";
import {computed, onBeforeMount, ref, toRaw} from "vue";
import moment from "moment";
import {APIs} from "../js/network/APIs";
import StandardTemplate from "../templates/standard/StandardTemplate";
import CoralTemplate from "../templates/coral/CoralTemplate";
import BerylTemplate from "../templates/beryl/BerylTemplate";


const eventResponse = ref(GetEvent)
const templateResponse = ref(GetTemplate)

const templates = {
    StandardTemplate,
    CoralTemplate,
    BerylTemplate
}

const isLoading = ref(true)
const hasData = ref(true)
const hasRegistry = ref(0)
const selectedTemplate = ref('StandardTemplate')


onBeforeMount(() => {
    const slug = location.pathname.replace('/the-outline/', '').replace('/', '')
    getEvent({slug: slug})
})

const eventDate = computed(() => {
    console.log(eventResponse.value.data)
    return moment(eventResponse.value.data.date).format("Do MMMM YYYY")
})


const getEvent = ({slug}) => {
    Requester.makeRequest({path: `${APIs.getEvent}/${slug}`, method: 'GET'})
        .then((response) => {
            eventResponse.value = Object.assign(GetEvent, response.data);
            const templateId = toRaw(eventResponse.value).data.template_id
            hasRegistry.value = toRaw(eventResponse.value).data.registers_guests
            getTemplates(templateId)
        })
        .catch((error) => {
            isLoading.value = false
            if (error.response.data.status === 404) {
                hasData.value = false
            }
        })
}

const getTemplates = (id) => {
    Requester.makeRequest({path: `${APIs.getTemplates}/${id}`, method: 'GET'})
        .then((response) => {
            templateResponse.value = Object.assign(GetTemplate, response.data);
            selectedTemplate.value = `${templateResponse.value.data.name}Template`
            isLoading.value = false
        })
        .catch((error) => {
            isLoading.value = false
            if (error.response.data.status === 404) {
                hasData.value = false
            }
        })
}

</script>

<style scoped>
@import "theming.css";
</style>
