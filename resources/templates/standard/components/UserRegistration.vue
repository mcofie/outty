<template>
    <div class="row justify-content-center h-100 vh-100">
        <div class="col-md-4 text-lg-start mt-5 py-5">
            <div>
                <h3 class="my-3 text-center">
                    User Registration
                </h3>
                <div class="mb-2">
                    <label class="form-label">Name</label>
                    <input type="text" v-model="name" class="form-control"
                           placeholder="">
                </div>
                <div class="mb-2">
                    <label class="form-label">Email address</label>
                    <input type="email" v-model="email" class="form-control"
                           placeholder="">
                </div>

                <div class="mb-2">
                    <label class="form-label">Phone number</label>
                    <input type="text" v-model="phone_number" class="form-control"
                           placeholder="">
                </div>
                <button type="button" class="btn w-100 py-3 mt-2 font-bold border-1 border-dark"
                        @click="registerUser()"
                        :style="{backgroundColor:event.data.background_color, color:event.data.text_color}">Base class
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";

const {
    event
} = defineProps(['event']);
const emit = defineEmits(['switchView'])

const name = ref('');
const email = ref('');
const phone_number = ref('');

const registerUser = () => {
    emit('switchView', {name: name.value, email: email.value, phone_number: phone_number.value})
}

</script>

<style scoped>

</style>
