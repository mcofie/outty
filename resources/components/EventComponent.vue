<template>
    <div class="">
        <form @submit.prevent="$event.preventDefault()">
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Event name</label>
                <input type="text" v-model="userData.name"
                       :class="[v$.name.$error ? 'form-control is-invalid' : 'form-control' ]"
                       id="exampleFormControlInput1"
                       placeholder="">
                <div class="">
                    <small v-if="!v$.name.$error" v-show="slugLookup.state === 1" class="text-success">
                        {{ slugLookup.message }}</small>
                    <small v-show="slugLookup.state === 0" class="text-danger"> {{ slugLookup.message }}</small>
                    <small v-if="v$.name.$error" class="text-danger"> {{
                            v$.name.$errors[0].$message
                        }}</small>
                </div>
            </div>

            <div class="mb-3">
                <label class="form-label">Description</label>
                <!--                <textarea cols="5" class="form-control" v-model="userData.description"></textarea>-->
                <editor
                    api-key="nk8g6c7xozd3yhhs5pd5xdpp0crzp65g5hdxd8fs4oixl2mz"
                    :class="[v$.description.$error ? 'form-control is-invalid' : 'form-control' ]"
                    v-model="userData.description"
                    :init="{
                         height: 350,
                         menubar: false,
                         plugins: [
                           'advlist autolink lists link image charmap print preview anchor',
                           'searchreplace visualblocks code fullscreen',
                           'insertdatetime media table paste code help wordcount'
                         ],
                         toolbar:
                           'undo redo | formatselect | bold italic backcolor | \
                           alignleft aligncenter alignright alignjustify | \
                           bullist numlist outdent indent | removeformat | help'
                       }"
                />
                <small v-if="v$.description.$error" class="text-danger"> {{
                        v$.description.$errors[0].$message
                    }}</small>
            </div>

            <div class="row justify-content-between">
                <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <label for="exampleFormControlInput1" class="form-label">Event Date</label>
                    <VueDatePicker v-model="userData.date"
                                   :class="[v$.date.$error ? 'form-control is-invalid' : 'form-control' ]"
                                   :format="format"
                                   :min-date="new Date()"
                                   placeholder="00/00/0000" text-input auto-apply :enable-time-picker="false"/>
                    <InfoTip message="(NB: Event date can't be edited once created!)"/>
                    <br>
                    <small v-if="v$.date.$error" class="text-danger"> {{
                            v$.date.$errors[0].$message
                        }}</small>
                </div>
                <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                    <label class="form-label mt-3 mt-lg-0 mt-xl-0 mt-xxl-0 mt-md-0">Event Type</label>
                    <select
                        :class="[v$.category.$error ? 'form-control form-select is-invalid' : 'form-select form-control' ]"
                        v-model="userData.category"
                        aria-label="Default select example">
                        <option disabled value="">Select Event Type</option>
                        <option v-for="type in EventTypes" :value="type">{{ type }}</option>
                    </select>
                    <small v-if="v$.category.$error" class="text-danger"> {{
                            v$.category.$errors[0].$message
                        }}</small>
                </div>
                <div class="col-4 d-none">
                    <label for="exampleFormControlInput1" class="form-label">Event image</label>
                    <input type="file" ref="getFile" style="display:none" class="form-control" placeholder="">
                    <div class="d-flex w-100 justify-content-evenly">
                        <button
                            class="btn btn-secondary btn-lg disabled rounded-2 py-2">
                            <i class="fa-regular fa-image"></i>
                        </button>
                        <button
                            @click="getFile.click()"
                            class="btn btn-secondary btn-lg px-5 rounded-2 py-2">
                            Select
                        </button>
                    </div>
                </div>
            </div>
        </form>

        <div class="fixed-bottom">
            <div class="bottom w-100 py-3">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-9 col-xl-7">
                            <h6 class="mx-0">Event Details</h6>
                            <div
                                class="d-flex justify-content-lg-end justify-content-md-end justify-content-center w-100 mt-4">
                                <button @click="goToNextSection"
                                        :class="[!v$.$invalid && slugLookup.state !== 0 ? '' : 'disabled','btn rounded-5 px-5 py-2 btn-primary btn-lg flex-sm-grow-0 font-bold  justify-content-lg-end flex-fill flex-sm-fill rounded-2']"
                                >
                                    NEXT
<!--                                    <i class="fa-solid fa-caret-right"></i>-->
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
import {ref, computed, onMounted, watch, onDeactivated, onBeforeUnmount} from 'vue'
import Editor from '@tinymce/tinymce-vue'
import debounce from 'lodash.debounce'
import {useVuelidate} from '@vuelidate/core'
import {useRouter} from 'vue-router'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {ComponentEventObject} from "../js/network/Models";
import {useStore} from 'vuex'
import {EventTypes, slugify} from "../js/utils";
import {checkIfArrayHasValues, format} from "../js/helper";
import Requester from "../js/network/Requester";
import {APIs} from "../js/network/APIs";
import {alpha, minLength, required} from "@vuelidate/validators";
import InfoTip from "./sections/InfoTip";

const store = useStore()
const router = useRouter()


const currentEventData = computed(() => store.state.event)

const getFile = ref(null)
const isButtonActive = ref(true)
const slugLookup = ref({
    message: '',
    state: -1
})


const userData =
    ref(
        {
            name: currentEventData.value.event.name,
            description: currentEventData.value.event.description,
            category: currentEventData.value.event.category,
            date: currentEventData.value.event.date
        }
    );


const checkSlugAvailability = debounce((n) => {
    if (n.length >= 5) {
        Requester.makeRequest({path: `${APIs.slug}${slugify(n)}`})
            .then((response) => {
                slugLookup.value.state = 1
                slugLookup.value.message = response.data.message
            })
            .catch((error) => {
                slugLookup.value.state = 0
                slugLookup.value.message = error.response.data.message
            })
    }
}, 500)

watch(() => userData.value.name, (name) => {
    if (name.replace(/ /g, '').length >= 0) {
        checkSlugAvailability(name)
    } else {
        slugLookup.value.state = -1
    }
})

const persistUserData = () => {
    const obj = ComponentEventObject
    obj.page = 'EventComponent'
    obj.data.event = Object.assign(obj.data.event, userData.value)
    return obj
}

const goToNextSection = () => {
    router.push({name: 'LineUp'})
    persistEvent(persistUserData().data)
    // emit('next', persistUserData())
}


const hasProposedName = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('event_name');
    if (myParam != null) {
        return {status: true, value: myParam}
    }
    return {status: false, value: ''}
}

onMounted(() => {
    if (hasProposedName().status) {
        userData.value.name = hasProposedName().value
        checkSlugAvailability(hasProposedName().value)
    }
})

const persistEvent = (data) => {
    store.commit('storeEventDetails', data)
}

const rules = {
    name: {
        required, minLengthValue: minLength(5), $autoDirty: true,
    },
    description: {required, minLengthValue: minLength(20), $autoDirty: true},
    date: {required, $autoDirty: true},
    category: {required, alpha, $autoDirty: true}
}

const v$ = useVuelidate(rules, userData)

onBeforeUnmount(() => {
})


</script>

<style scoped>

</style>
