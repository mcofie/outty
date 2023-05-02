<template>
    <div class="card">
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
                <div class="col-6">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" v-model="userData.email" class="form-control"
                           :class="[v$.email.$error ? 'form-control is-invalid' : 'form-control' ]"
                           placeholder="">
                    <small v-if="v$.email.$error" class="text-danger"> {{
                            v$.email.$errors[0].$message
                        }}</small>
                </div>
                <div class="col-6">
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
                        <div class="col-md-7">
                            <div class="d-flex justify-content-between w-100 mt-4">
                                <button @click="goToPreviousSection" class="btn btn-secondary btn-lg rounded-1">
                                    <i class="fa-solid fa-caret-left"></i>
                                </button>

                                <button v-if="!isCheckoutSuccessful" @click="goToNextSection"
                                        :class="[ !v$.$invalid ? '' : 'disabled','btn btn-primary btn-lg px-5 rounded-2']"
                                >
                                    Checkout <i class="fa-solid fa-caret-right"></i>
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
import {ref} from 'vue'
import {useStore} from 'vuex'

const store = useStore()
import {ComponentEventObject} from "../js/network/Models";
import {email, minLength, numeric, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";

const emit = defineEmits(['checkout', 'previous'])
const props = defineProps(['eventStore'])
const user = props.eventStore.user
const isButtonActive = ref(false)
const isCheckoutSuccessful = ref(false)


const userData = ref(
    {
        name: user.name,
        email: user.email,
        phone_number: user.phone_number,
    }
);


const persistUserData = () => {
    const obj = ComponentEventObject
    obj.page = 'EventOrganizerComponent'
    obj.data.user = Object.assign(obj.data.user, userData.value)
    return obj
}

const goToNextSection = () => {
    emit('checkout', persistUserData())
    isCheckoutSuccessful.value = true
}
const goToPreviousSection = () => emit('previous', persistUserData())


const rules = {
    name: {
        required, minLengthValue: minLength(5), $autoDirty: true,
    },
    email: {required, email, $autoDirty: true},
    phone_number: {required, numeric, minLengthValue: minLength(10), $autoDirty: true},
}

const v$ = useVuelidate(rules, userData)


</script>

<style scoped>

</style>
