import Vue from 'vue'
import Vuex from 'vuex'
import { vuexOidcCreateStoreModule } from 'vuex-oidc'
import { oidcSettings } from '../config/oidc.js'

Vue.use(Vuex)

export default new Vuex.Store({
  
  modules: {
    oidcStore: vuexOidcCreateStoreModule(
      oidcSettings,
      // NOTE: If you do not want to use localStorage for tokens, in stead of just passing oidcSettings, you can
      // spread your oidcSettings and define a userStore of your choice
      // {
      //   ...oidcSettings,
      //   userStore: new WebStorageStateStore({ store: window.sessionStorage })
      // },
      // Optional OIDC store settings
      {
        namespaced: true,
        dispatchEventsOnWindow: true
      },
      // Optional OIDC event listeners
      {
        userLoaded: (user) => console.log('OIDC user is loaded:', user),
        userUnloaded: () => console.log('OIDC user is unloaded'),
        accessTokenExpiring: () => console.log('Access token will expire'),
        accessTokenExpired: () => console.log('Access token did expire'),
        silentRenewError: () => console.log('OIDC user is unloaded'),
        userSignedOut: () => console.log('OIDC user is signed out'),
        oidcError: (payload) => console.log('OIDC error', payload)
      }
    )
  },
  getters:{
    topNavs(state){
     // return state.navList;
      return state.navList.filter(o=>o.type == 0);
    },
    allNavs(state){
      return state.navList;
    },
    coumnNavs(state){
      return state.navList.filter(o=>o.type==2);
    },
    hasNav(state){
      return  state.navList.length>0;
    },
    tagData(state){
       return state.tagList;
    },
    hasTags(state){
    
      return state.tagList.length>0;
    },


  },
  state: {
    navList:[],
    tagList:[],
 
  },
  mutations: {
    setAllNav(state,payload){
      
      state.navList = payload.navList;
    },
    setAllTags(state,payload)
    {
      console.log("payload tag:"+payload.tagList.length);
      state.tagList = payload.tagList;
    }
  },
  actions: {
  }
 
})
