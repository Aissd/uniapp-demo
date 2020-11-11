import Vue from 'vue';
import store from "@/store/index";
import App from './App';

import router from '@/router/index.js';
Vue.prototype.$r = router;

import uView from "uview-ui";
Vue.use(uView);

Vue.config.productionTip = false;

App.mpType = 'app';

const app = new Vue({
	store,
    ...App
});
app.$mount();
