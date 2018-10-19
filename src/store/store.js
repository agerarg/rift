import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        isWritingMsg:false,
        loadDataPack:1,
        allowRightContent:true
    }
});