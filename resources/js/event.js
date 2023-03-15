import './bootstrap';
import {createApp} from 'vue';

import App from '../components/EventFront.vue'
import store from "./store";

createApp(App)
    .use(store)
    .mount("#event")
