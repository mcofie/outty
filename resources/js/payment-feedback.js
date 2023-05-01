import './bootstrap';
import '../css/app.css';
import {createApp} from 'vue';


import App from '../components/PaymentSuccessComponent'
import store from "./store";

createApp(App)
    .use(store)
    // .use(require('vue-moment'))
    .mount("#paymentFeedback")
