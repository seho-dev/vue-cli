import Vue from 'vue';
import router from "../src/router"
import App from './App.vue';


new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router
})