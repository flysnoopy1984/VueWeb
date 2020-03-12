import Vue from 'vue'
import Vuex from 'vuex'

import dialog_store from './dialog_store.js'

Vue.use(Vuex)

export default new Vuex.Store({

  modules:{
    dialog:dialog_store,
  }
  // state: {
  //   formData:Object,
  // },
  // mutations: {
  //   setformData(state,data)
  //   {
  //     console.log("setformData");
  //     state.formData = data;
  //   }
  // },
  // actions: {

  // },
  // modules: {

  // }
})
