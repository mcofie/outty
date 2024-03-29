<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 col-lg-9 col-xl-7 mt-5">
                <div v-if="!isLoading" class="container">
                    <div v-if="hasData">
                        <ul class="list-unstyled text-center">
                            <li><h1>{{ event.name }}</h1></li>
                            <li>
                                <p>{{ formatDate(event.date) }}</p>
                            </li>
                            <li></li>
                            <li></li>
                        </ul>
                        <div class="card">
                            <form @submit.prevent="$event.preventDefault()">
                                <div class="row justify-content-center">
                                    <div class="col-md-8 text-center">
                                        <ul class="list-unstyled">
                                            <li>
                                                <qrcode-vue :value="qrCode.value" :size="qrCode.size" level="H"/>
                                            </li>
                                            <li class="mt-4"><p>Create an inclusive event line-up that matter.</p></li>
                                            <li>
                                                <div class="d-flex justify-content-center text-center">
                                                    <input type="text"
                                                           class="form-control text-center align-self-center w-50"
                                                           :value="'https://outty.co/'+event.slug" disabled/>
                                                    <a :href="'https://outty.co/'+event.slug" target="_blank">
                                                        <button class="btn btn-secondary btn-lg rounded-1 mx-2">
                                                            <i class="fa-solid fa-arrow-up-right-from-square"></i>
                                                        </button>
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-md-10">
                                        <div class="d-flex justify-content-center mt-2">
                                            <button type="button"
                                                    @click="onDownloadQRCode(event.slug)"
                                                    class="btn btn-primary rounded-5 py-3 px-4 btn-lg mx-3 font-bold">
                                                DOWNLOAD
                                                QR CODE
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-center my-4">
                                    <div class="col-md-12">
                                        <div class="card grey">
                                            <div class="card-body">
                                                <div class="row justify-content-center">
                                                    <div class="col-md-10 text-center">
                                                        <ul class="list-unstyled mt-2">
                                                            <li>
                                                                <h1 style="font-size: 5rem;">
                                                                    🎊
                                                                </h1>
                                                            </li>
                                                            <li class="mb-3">
                                                                <h4>Thank you for your purchase!</h4>
                                                            </li>
                                                            <li>
                                                                <p>An email will be sent to you once the payment is
                                                                    received. This email confirms receipt and
                                                                    affords you the chance to edit and share event
                                                                    details.</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div v-else>
                        <EmptyState title="No data"
                                    message="Oops! It seems like the content you're looking for isn't available at the moment. We apologize for any inconvenience caused. "></EmptyState>
                    </div>
                </div>
                <div v-else class="d-flex justify-content-center">
                    <div class="spinner-grow text-secondary mt-5" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import QrcodeVue from 'qrcode.vue'
import Requester from "../js/network/Requester";
import {APIs} from "../js/network/APIs";
import {CreateEventLineUp, GetEvent} from "../js/network/Models";
import EmptyState from "./sections/EmptyState";
import moment from "moment";

const isLoading = ref(false)
const hasData = ref(true)
const event = ref(CreateEventLineUp.event)
const qrCode = ref({value: "https://outty.co", size: 180})


onMounted(() => {
    getEventByReference()
})

const onDownloadQRCode = (slug) => {
    console.log(slug)
    Requester.makeRequest({path: `${APIs.qrcode}${slug}`})
        .then((response) => {
            forceFileDownload(response, slug)
        })
        .catch((error) => {

        })
}

const forceFileDownload = (response, title) => {
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', title + ".svg")
    document.body.appendChild(link)
    link.click()
}

const getReferenceId = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('referenceId');
    if (myParam != null) {
        return {status: true, value: myParam}
    }
    return {status: false, value: ''}
}

const formatDate = (date) => {
    return moment(date).format("Do MMMM YYYY")
}


const getEventByReference = () => {
    isLoading.value = true
    if (getReferenceId().status) {
        Requester.makeRequest({path: `${APIs.getPaymentByReference}/${getReferenceId().value}`, method: 'GET'})
            .then((response) => {
                event.value = Object.assign(CreateEventLineUp.event, response.data.data);
                qrCode.value.value = "https://outty.co/" + event.value.slug
                isLoading.value = false
            })
            .catch((error) => {
                isLoading.value = false
                if (error.response.data.status === 404) {
                    hasData.value = false
                }
                console.log(error.response.data)
            })
    } else {

    }

}
</script>

<style scoped>

</style>
