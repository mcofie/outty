import './bootstrap';
import {createApp} from 'vue';
import Edit from '../components/EditEvent'
import store from "./store";


createApp(Edit)
    .use(store)
    .mount("#edit")
