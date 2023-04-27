<template>
    <div class="card">
        <form>
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
                                       value="https://p.hbtl.co/6Gjg5c" disabled/>
                                <button class="btn btn-secondary btn-lg disabled rounded-1 mx-2"
                                        disabled>
                                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="row justify-content-center my-4">
                <div class="col-md-12">
                    <div class="card grey">
                        <div class="card-body">
                            <div class="row justify-content-center">
                                <div class="col-md-10 text-center">
                                    <ul class="list-unstyled mt-5">
                                        <li class="mb-3">
                                            <h4>Lorem ipsum dolor sit ametdolor sit amet,</h4>
                                        </li>
                                        <li>
                                            <p>Lorem ipsum dolor sit ametdolor sit amet,Lorem ipsum dolor
                                                sit
                                                ametdolor sit amet,Lorem ipsum dolor sit ametdolor sit
                                                amet,Lorem
                                                ipsum dolor sit ametdolor sit amet,Lorem ipsum dolor sit
                                                ametdolor
                                                sit amet,</p>
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
</template>

<script setup>
import {reactive} from "vue";
import QrcodeVue from 'qrcode.vue'
const qrCode = reactive({value:"https://www.buymeacoffee.com/mcofie",size:180})


</script>

<style scoped>

</style>
