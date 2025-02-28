import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.scss'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import _ from 'lodash'

import i18n from './plugins/i18n';

import VueGtag from "vue-gtag";

const app = Vue.createApp({
    render: h => h(App)
});
app.use(router);

app.use(BootstrapVue)
app.use(IconsPlugin)

app.use(i18n);


const host = window.location.hostname;

// if(host === 'localhost'){
//   app.use(VueGtag, {
//     config: { id: "G-9673KN016G"}
//   })
// }
// else{
//   app.use(VueGtag, {
//     config: { id: "G-164M2C37V2"}
//   })
// }


app.prototype._ = _;

app.mount('#app');
