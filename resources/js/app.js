import './bootstrap';
import '../css/app.css';
import {createApp} from 'vue';
import App from '../components/App.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import store from "./store";


createApp(App)
    .component('VueDatePicker', VueDatePicker)
    // .use(store)
    .mount('#app')

