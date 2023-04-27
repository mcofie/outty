<template>
    <div class="card">
        <form @submit.prevent="$event.preventDefault()">
            <div class="row justify-content-center">
                <div class="col-md-8 text-center">
                    <ul class="list-unstyled">
                        <li>
                            <h4>REDIRECTING ....</h4>
                        </li>
                        <li>
                            <h1 class="font-large">
                                00:0{{ countDown }}
                            </h1>
                        </li>
                        <li class="d-flex justify-content-center">
                            <div class="progress w-25" role="progressbar"
                                 aria-label="Animated striped example" aria-valuenow="75"
                                 aria-valuemin="0" aria-valuemax="100">
                                <div
                                    class="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                    :style="{width:  100/countDown+'%' }"></div>
                            </div>
                        </li>
                        <li class="mt-4"><h4>Making Payment to: {{ event.event.name }}</h4></li>
                        <li class="mt-1"><p>Create an inclusive event line-up that matter.</p></li>
                        <li>
                            <div class="d-flex justify-content-center text-center">
                                <input type="text"
                                       ref="input"
                                       class="form-control text-center align-self-center w-50"
                                       disabled
                                       :value="event.payment_url"/>
                                <button class="btn btn-secondary btn-lg rounded-1 mx-2" @click="copyToClipBoard">
                                    <i class="fa-solid fa-copy"></i>
                                </button>
                            </div>
                        </li>
                        <li>
                            <a :href="event.payment_url">
                                <button class="btn btn-primary rounded-2 btn-lg mt-4" type="button">
                                    Make Payment
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'

const emit = defineEmits(['next'])
const props = defineProps(['eventResponse'])
const event = props.eventResponse
const input = ref(null)

let countDown = ref(5)

onMounted(() => {
    setInterval(() => {
        if (countDown.value >= 1) {
            --countDown.value
        } else {
            window.location.href = event.payment_url;
        }
    }, 1000);
})

const copyToClipBoard = () => {
    input.value.select();
    input.value.setSelectionRange(0, 99999); // For mobile devices

    console.log(input.value.value)

    navigator.clipboard.writeText(input.value.value)
    alert("Copied the text: " + input.value.value);
}

const goToNextSection = () => {
    emit('next', 'PaymentRedirectionComponent')
}


</script>

<style scoped>

</style>
