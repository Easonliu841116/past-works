import Vue from 'vue';
import App from './App.vue';
import 'jquery';
import 'jquery-ui/ui/widgets/draggable';
import 'bootstrap';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
