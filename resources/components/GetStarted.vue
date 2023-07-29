<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10 col-lg-9 col-xl-7">
                <div class="container">
                    <div class="row">
                        <nav class="navbar py-3 px-2">
                            <div class="container p-0">
                                <div class="d-flex justify-content-start text-start w-100">
                                    <ul class="list-unstyled pb-0 mb-0">
                                        <li class="mb-1">
                                            <h4><a class="navbar-brand fs-3 text-center"
                                                   href="/" target="_blank"> <i class="fa-solid fa-caret-right"></i>
                                                outty.co</a>
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div class="col-md-12 mb-5">
                            <div class="progress" role="progressbar" aria-label="Basic example"
                                 aria-valuenow="15"
                                 aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar" :style="{ width: pageProgress + '%'}"></div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <router-view/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue'
import {useRouter} from 'vue-router'
import {useStore} from 'vuex'


const store = useStore()
const router = useRouter()

router.push({name: 'Event'})


const pageProgress = ref(20)


const onPreviousSection = (n) => {
    persistEvent(n.data)
}


const persistEvent = (data) => {
    store.commit('storeEventDetails', data)
}

</script>

<style scoped>

</style>
