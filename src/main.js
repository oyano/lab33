import Vue from 'vue'
import App from './App.vue'
import Month from './components/appMonth.vue'

Vue.filter('uppercase', str => str.toUpperCase());
Vue.component('app-month', Month);

new Vue({
    render: h => h(App),
}).$mount('#app')