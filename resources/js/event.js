import './bootstrap';
import {createApp} from 'vue';
import {useRoute, useRouter} from "vue-router";

import App from '../components/EventFront.vue'
// import {createMetaManager} from "vue-meta";
import store from "./store";

const route = useRoute();

createApp(App)
    .use(store)
    // .use(createMetaManager())
    .mount("#event")
