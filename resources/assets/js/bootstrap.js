import Vue from 'vue';
import axios from 'axios';
import VueRouter from 'vue-router';
import 'bootstrap';

window.Vue = Vue;
Vue.use(VueRouter);
window.axios = axios;
// window.bootstrap = bootstrap;

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
};
