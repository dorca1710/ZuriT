import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

axios.defaults.baseURL = 'http://localhost:3000/api';

import Vue from 'vue';
import App from './App.vue'; // El componente raíz de tu aplicación
import router from './router'; // La configuración de Vue Router

new Vue({
router,
render: h => h(App)
}).$mount('#app');
