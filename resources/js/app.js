import './bootstrap';
import {createApp} from 'vue';
import App from '../components/App.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {createStore} from "vuex";


const store = createStore({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})

createApp(App)
    .component('VueDatePicker', VueDatePicker)
    .use(store)
    .mount('#app')

