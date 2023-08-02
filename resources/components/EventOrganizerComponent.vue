<template>
    <div class="">
        <form @submit.prevent="$event.preventDefault()">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Organized By:</label>
                <input type="text" v-model="userData.name"
                       :class="[v$.name.$error ? 'form-control is-invalid' : 'form-control' ]"
                       id="exampleFormControlInput1"
                       placeholder="">
                <small v-if="v$.name.$error" class="text-danger"> {{
                        v$.name.$errors[0].$message
                    }}</small>
            </div>

            <div class="row justify-content-between">
                <div class="col-12 col-md-6 col-xxl-6 col-xl-6 col-lg-6">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" v-model="userData.email" class="form-control"
                           :class="[v$.email.$error ? 'form-control is-invalid' : 'form-control' ]"
                           placeholder="">
                    <small v-if="v$.email.$error" class="text-danger"> {{
                            v$.email.$errors[0].$message
                        }}</small>
                </div>
                <div class="col-12 col-md-6 col-xxl-6 col-xl-6 col-lg-6 mt-2 mt-lg-0 mt-md-0 mt-xl-0">
                    <label for="exampleFormControlInput1" class="form-label">Contact number</label>
                    <input type="text" v-model="userData.phone_number"
                           :class="[v$.phone_number.$error ? 'form-control is-invalid' : 'form-control' ]"
                           placeholder="">
                    <small v-if="v$.phone_number.$error" class="text-danger"> {{
                            v$.phone_number.$errors[0].$message
                        }}</small>
                </div>
            </div>

        </form>


        <div class="fixed-bottom">
            <div class="bottom w-100 py-3">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-9 col-xl-7">
                            <div class="d-flex justify-content-between w-100 mt-4">
                                <button @click="goToPreviousSection" class="btn btn-secondary btn-lg rounded-1">
                                    <i class="fa-solid fa-caret-left"></i>
                                </button>

                                <button v-if="!isCheckoutSuccessful" @click="goToNextSection"
                                        :class="[ !v$.$invalid ? '' : 'disabled','btn btn-primary btn-lg rounded-5 px-5 py-2 font-bold']"
                                >
                                    Checkout
                                </button>

                                <button v-else-if="isCheckoutSuccessful" class="btn btn-primary btn-lg" type="button"
                                        disabled>
                                    <span class="spinner-border spinner-border-sm" role="status"
                                          aria-hidden="true"></span>
                                    Loading...
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
import {ref, computed} from 'vue'
import {useStore} from 'vuex'


import {ComponentEventObject, CreateEventResponse} from "../js/network/Models";
import {email, minLength, numeric, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import {useRoute, useRouter} from "vue-router";
import {slugify} from "../js/utils";
import moment from "moment";
import {formatTime} from "../js/helper";
import Requester from "../js/network/Requester";
import {APIs} from "../js/network/APIs";


const router = useRouter();
const route = useRoute()
const store = useStore()
// const emit = defineEmits(['checkout', 'previous'])
// const props = defineProps(['eventStore', 'isEdit'])
// const user = props.eventStore.user

const currentEventData = computed(() => store.state.event)


const user = currentEventData.value.user

const isButtonActive = ref(false)
const isCheckoutSuccessful = ref(false)


const userData = ref(
    {
        name: currentEventData.value.user.name,
        email: currentEventData.value.user.email,
        phone_number: currentEventData.value.user.phone_number,
    }
);

const persistEvent = (data) => {
    store.commit('storeEventDetails', data)
}

const paymentUrl = (data) => {
    store.commit('paymentURL', data)
}

const persistUserData = () => {
    const obj = ComponentEventObject
    obj.page = 'EventOrganizerComponent'
    obj.data.user = Object.assign(obj.data.user, userData.value)
    return obj
}

const goToNextSection = () => {
    // emit('checkout', persistUserData())
    persistEvent(persistUserData().data)
    gotoCheckout()
    isCheckoutSuccessful.value = true
}
const goToPreviousSection = () => {
    router.go(-1)
    persistEvent(persistUserData().data)
    // persistEvent(persistUserData())
    // emit('previous', persistUserData())
}


const rules = {
    name: {
        required, minLengthValue: minLength(5), $autoDirty: true,
    },
    email: {required, email, $autoDirty: true},
    phone_number: {required, numeric, minLengthValue: minLength(10), $autoDirty: true},
}

const v$ = useVuelidate(rules, userData)


const gotoCheckout = () => {
    // persistEvent(name.data)
    currentEventData.value.event.slug = slugify(currentEventData.value.event.name)
    currentEventData.value.event.date = moment(currentEventData.value.event.date).format("YYYY-MM-DD");
    currentEventData.value.lineups.map((lineup) => {
        lineup.start_time = moment(formatTime(lineup.start_time)).format('HH:mm')
        if (lineup.end_time !== null) {
            lineup.end_time = moment(formatTime(lineup.end_time)).format('HH:mm')
        } else {
            lineup.end_time = null;
        }

    })
    createEvent({data: currentEventData.value})
    //
}

const createEvent = ({data}) => {
    Requester.makeRequest({data: data, path: `${APIs.createEvent}`, method: 'POST'})
        .then((response) => {
            localStorage.removeItem('eventStore')
            const url = response.data.data.payment_url
            const event = response.data.data.event

            paymentUrl(url)
            router.push({name: 'Payment'})

            // eventResponse.value = Object.assign(CreateEventResponse.data, response.data.data)
        })
        .catch((error) => {
            // console.log(error.response.data)
        })
}


</script>

<style scoped>

</style>
