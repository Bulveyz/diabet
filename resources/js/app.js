/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */


require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import {router} from "./router/router";
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

Vue.component('home-header', require('./components/HomeHeader'));
Vue.component('bottom-bar', require('./components/BottomBar'));
Vue.component('sidebar', require('./components/SideBar'));


const app = new Vue({
  el: '#app',
  router
});
