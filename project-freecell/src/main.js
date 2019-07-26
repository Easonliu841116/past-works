import Vue from 'vue';
import App from './App.vue';
import 'jquery';
import 'bootstrap';
import CardNumber from './filters/CardNumber';

Vue.config.productionTip = false;
Vue.filter('CardNumberFilter', CardNumber);

new Vue({
  render: h => h(App),
}).$mount('#app');
