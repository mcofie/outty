import './bootstrap';
import '../css/app.css';
import {createApp} from 'vue';
import VueMoment from 'vue-moment'
// import moment from 'moment-timezone'
import VueSweetalert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

import App from '../components/GetStarted.vue'
import store from "./store";

createApp(App)
    .use(store)
    .use(VueSweetalert2)
    .mount("#getstarted")
