/* eslint-disable camelcase */
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import {
  ValidationProvider,
  ValidationObserver,
  extend,
} from 'vee-validate';
import {
  required,
  email,
  min_value,
} from 'vee-validate/dist/rules';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueScrollTo from 'vue-scrollto';
import FastClick from 'fastclick';
import VueAnalytics from 'vue-analytics';
import App from './App.vue';

// css
import 'swiper/css/swiper.css';


Vue.config.productionTip = false;


// Add a rule.
extend('email', {
  ...email,
  message: '↑ 這樣寄不到啦',
});

extend('required', {
  ...required,
  message: '↑ 這裡這裡，填一下',
});

extend('required_attend', {
  ...required,
  message: '↑ 到底有沒有要來啊',
});

extend('required_whosFriend', {
  ...required,
  message: '↑ 到底誰朋友啊 (都認識的話選小柔，有餅)',
});

extend('required_whichTable', {
  ...required,
  message: '↑ 你想坐哪裡，不然排你跟我阿嬤坐主桌',
});

extend('required_adultNum', {
  ...required,
  min_value,
  message: '↑ 來個大人吧',
});

if ('addEventListener' in document) {
  console.log('FastClick.attach(document.body)');
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
  }, false);
}

Vue.use(VueAnalytics, {
  id: 'UA-157944047-1',
});
Vue.use(VueScrollTo);
Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

new Vue({
  render: h => h(App),
}).$mount('#app');
