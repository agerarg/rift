import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        isWritingMsg:false,
        loadDataPack:1,
        allowRightContent:true
    },
    getters:{
        isWriting : (state)=>{
            return state.isWritingMsg;
        }
    },
    mutations:{
        setWriting: (state,payLoad)=> {
           state.isWritingMsg=payLoad;
          }
    },
    actions: {
      isNotWriting: (context) => {
        setTimeout(()=>{
            context.commit('setWriting',false);
        },10);

      },
      isWriting: (context) => {
        context.commit('setWriting',true);
      }
    }
});