import Vue from 'vue';
import Vuex from 'vuex';
import store1 from '@/store/modules/store1/store1';
import store2 from '@/store/modules/store2/store2';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    store1,
    store2,
  },
});
