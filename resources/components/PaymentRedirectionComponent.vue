<template>
    <div class="card">
        <form @submit.prevent="goToNextSection">
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
                        <li class="mt-4"><p>Create an inclusive event line-up that matter.</p></li>
                        <li>
                            <div class="d-flex justify-content-center text-center">
                                <input type="text"
                                       class="form-control text-center align-self-center w-50"
                                       value="https://p.hbtl.co/6Gjg5c" disabled/>
                                <button class="btn btn-secondary btn-lg disabled rounded-1 mx-2"
                                        disabled>
                                    <i class="fa-solid fa-copy"></i>
                                </button>
                            </div>
                        </li>
                        <li>
                            <button class="btn btn-primary rounded-2 btn-lg mt-4" type="button">
                                Make Payment
                            </button>
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

let countDown = ref(3)

onMounted(() => {
    setInterval(() => {
        if (countDown.value >= 1) {
            --countDown.value
        } else {
            window.location.href = "https://p.hbtl.co/MQp4d5";
        }
    }, 1000);
})

const goToNextSection = () => {
    emit('next', 'PaymentRedirectionComponent')
}


</script>

<style scoped>

</style>
