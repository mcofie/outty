<template>
    <div class="card">
        <form @submit.prevent="$event.preventDefault()">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Organized By:</label>
                <input type="text" v-model="userData.name" class="form-control" id="exampleFormControlInput1"
                       placeholder="">
            </div>

            <div class="row justify-content-between">
                <div class="col-6">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" v-model="userData.email" class="form-control" placeholder="">
                </div>
                <div class="col-6">
                    <label for="exampleFormControlInput1" class="form-label">Contact number</label>
                    <input type="text" v-model="userData.phone_number" class="form-control" placeholder="">
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
                                <button @click="goToNextSection" class="btn btn-primary btn-lg px-5 rounded-2">
                                    Checkout <i class="fa-solid fa-caret-right"></i>
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

const store = useStore()
import {ComponentEventObject} from "../js/network/Models";

const emit = defineEmits(['next', 'previous'])
const props = defineProps(['eventStore'])
const user = props.eventStore.user

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

const goToNextSection = () => emit('next', persistUserData())
const goToPreviousSection = () => emit('previous', persistUserData())

const currentEventData = computed(() => store.state.event)

</script>

<style scoped>

</style>
