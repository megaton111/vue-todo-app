import Vue from 'vue'
import App from './App.vue'
import router from './router/index'; 
import store from './store/index'; 
import { library } from '@fortawesome/fontawesome-svg-core'

import { faLink, faRedo, faUndo, faCheckCircle as fabCheckCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt, faCheckCircle } from "@fortawesome/free-regular-svg-icons";


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrashAlt, faCheckCircle, fabCheckCircle, faPlus );
library.add(faLink, faRedo, faUndo);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

import "@/assets/scss/_index.scss" ; 

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
