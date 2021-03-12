import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import Form from './core/Form';
import 'bootstrap';

window.Vue = Vue;
Vue.use(VueRouter);
window.axios = axios;
window.Form = Form;


window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
};
