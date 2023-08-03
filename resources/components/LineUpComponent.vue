<template>
    <div class="w-100">
        <form @submit.prevent="$event.preventDefault()">
            <div v-for="(lineup,index) in lineups" class="mb-2">
                <div class="row justify-content-center">
                    <div class="d-flex justify-content-evenly">
                        <h4 class="text-start py-2">#{{ index + 1 }}</h4>

                        <div class="w-100 d-flex justify-content-end">
                            <button @click="deleteLineUp(index)"
                                    style="height: 50px;" type="button" class="btn text-danger text-end opacity-25"><i
                                class="fa-solid fa-eraser"></i> Delete
                            </button>
                        </div>
                    </div>

                    <div class="col-12 mt-1 col-lg-6 col-xl-6 col-md-6 ">
                        <div class="w-100">
                            <VueDatePicker
                                v-model="lineup.start_time" time-picker
                                class="form-control line-up-start border-start-4"
                                placeholder="00:00"
                                :is-24="false"
                                auto-apply
                                text-input/>
                        </div>
                    </div>


                    <div class="col-12 mt-1 col-lg-6 col-xl-6 col-md-6">
                        <div class="w-100">
                            <VueDatePicker v-model="lineup.end_time" time-picker class="form-control line-up-end"
                                           placeholder="00:00"
                                           :is-24="false"
                                           auto-apply
                                           text-input/>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center my-3">
                    <div class="col-12">
                        <!--                        <label class="form-label">Title</label>-->
                        <input type="text" placeholder="Programme title" v-model="lineup.title" class="form-control"
                               required>
                    </div>
                </div>

                <div class="accordion accordion-flush" :id="`accordion${index}`">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button px-0" type="button" data-bs-toggle="collapse"
                                    :data-bs-target="`#collapse${index}`" aria-expanded="true"
                                    aria-controls="collapseOne">
                                <!--                                Description-->
                            </button>
                        </h2>
                        <div :id="`collapse${index}`" class="accordion-collapse collapse" aria-labelledby="headingOne"
                             :data-bs-parent="`#accordion${index}`">
                            <p>Description</p>
                            <div class="accordion-body p-0">
                                <editor
                                    api-key="nk8g6c7xozd3yhhs5pd5xdpp0crzp65g5hdxd8fs4oixl2mz"
                                    :class="'form-control'"
                                    v-model="lineup.description"
                                    :init="{
                                             height: 250,
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

                                <!--                                <textarea cols="5" class="form-control" v-model="lineup.description"></textarea>-->

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="d-flex justify-content-end">
                <button @click="addLineUp" class="btn btn-secondary btn-lg rounded-1">
                    <i class="fa-solid fa-plus"></i>
                </button>
            </div>

        </form>

        <div class="fixed-bottom">
            <div class="bottom w-100 py-3">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10 col-lg-9 col-xl-7">
                            <h6 class="">Programme Lineup</h6>
                            <div class="d-flex justify-content-between w-100 mt-4">
                                <button @click="goToPreviousSection" class="btn btn-secondary btn-lg rounded-5" style="padding:10px 26px">
                                    <i class="fa-solid fa-caret-left"></i>
                                </button>
                                <button @click="goToNextSection"
                                        :class="[!v$.$invalid ? '' : 'disabled','btn btn-primary btn-lg px-5 rounded-5 px-5 py-3 font-bold']">
                                    NEXT
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
import {ref, toRaw, watch, computed, inject, onMounted} from 'vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {ComponentEventObject} from "../js/network/Models";
import {checkIfArrayHasValues, formatTime} from "../js/helper";
import {alpha, minLength, required} from "@vuelidate/validators";
import {useVuelidate} from "@vuelidate/core";
import {useStore} from 'vuex'
import Editor from '@tinymce/tinymce-vue'
import {useRouter} from 'vue-router'


const store = useStore();
const router = useRouter();


// const emit = defineEmits(['next', 'previous'])
// const props = defineProps(['eventStore', 'isEdit'])

const currentEventData = computed(() => store.state.event)

// currentEventData.value.lineups

// const pLineups = props.eventStore.lineups
const pLineups = currentEventData.value.lineups
const isButtonActive = ref(true)

const time = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes()
};

const swal = inject('$swal')


const lineups = ref(pLineups)

const addLineUp = () => {
    isButtonActive.value = false
    lineups.value.push({
        title: "",
        description: "",
        start_time: time,
        end_time: time
    })
}

const fTime = (t) => {
    formatTime(t)
}

const persistUserData = () => {
    const obj = ComponentEventObject
    obj.page = 'LineUpComponent'
    obj.data.lineups = Object.assign(obj.data.lineups, toRaw(lineups.value))
    return obj
}
const deleteLineUp = (index) => {
    if (lineups.value.length >= 2) {
        swal({
            icon: 'question', title: 'Are you sure you want to delete this?', showDenyButton: true,
            confirmButtonText: 'YES',
            denyButtonText: `No, Cancel`
        }).then((result) => {
            if (result.isConfirmed) {
                lineups.value.splice(index, 1)
            } else {
                this.close()
            }
        });
    }
}
const goToNextSection = () => {
    router.push({name: 'Customizer'})
    persistEvent(persistUserData().data)
}
const goToPreviousSection = () => {
    router.back()
    persistEvent(persistUserData().data)
}

const persistEvent = (data) => {
    store.commit('storeEventDetails', data)
}

const rules = {
    lineups: {
        required,
        $each: {
            start_time: {
                required
            },
            end_time: {required},
            title: {required},
            description: {required}
        }
    }
}

const v$ = useVuelidate(rules, {lineups})

onMounted(() => {
    // console.log(props.eventStore)
})


</script>

<style scoped>

</style>
