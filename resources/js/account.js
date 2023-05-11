import './bootstrap';
import {createApp} from 'vue';
import Account from '../components/Account'
import store from "./store";


createApp(Account)
    .use(store)
    .mount("#account")
