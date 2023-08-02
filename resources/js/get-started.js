import './bootstrap';
import '../css/app.css';
import {createApp} from 'vue';
import VueSweetalert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

import App from '../components/GetStarted.vue'
import store from "./store";

// import router functions
import {createRouter, createWebHistory} from 'vue-router'

const basePath = '/the-outline'
// const basePath = ''


// setup routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: `${basePath}/get-started/event`,
            name: 'Event',
            component: () => import('../components/EventComponent'),
            meta: {transition: 'slide-right'},
        },
        {
            path: `${basePath}/get-started/lineup`,
            name: 'LineUp',
            component: () => import('../components/LineUpComponent'),
            meta: {transition: 'slide-right'},
        },
        {
            path: `${basePath}/get-started/organizer`,
            name: 'Organizer',
            component: () => import('../components/EventOrganizerComponent')
        },
        {
            path: `${basePath}/get-started/customizer`,
            name: 'Customizer',
            component: () => import('../components/EventPageCustomizationComponent')
        },
        {
            path: `${basePath}/get-started/payment`,
            name: 'Payment',
            component: () => import('../components/PaymentRedirectionComponent')
        },
        {
            path: `${basePath}/get-started/preview`,
            name: 'Preview',
            component: () => import('../components/EventPreviewComponent')
        }

    ]
})

createApp(App)
    .use(router)
    .use(store)
    .use(VueSweetalert2)
    .mount("#getstarted")
