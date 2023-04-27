import './bootstrap';
import '../css/app.css';
import {createApp} from 'vue';
import VueMoment from 'vue-moment'
// import moment from 'moment-timezone'

import App from '../components/GetStarted.vue'
import store from "./store";

createApp(App)
    .use(store)
    // .use(require('vue-moment'))
    .mount("#getstarted")
