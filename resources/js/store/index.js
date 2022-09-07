import {createStore} from 'vuex';

const store = createStore({
    state:{
        token: localStorage.getItem('token') || 0
    },
    mutations:{
        update_token(state,payload){
            state.token = payload;
        }
    },
    actions:{
        set_token(context,payload){
            localStorage.setItem('token',payload);
            context.commit('update_token',payload)
        },
        remove_token(context){
            localStorage.removeItem('token');
            context.commit('update_token',0);
        }
    },
    getters:{
        getToken: function(state){
            return state.token;
        }
    }
});
export default store;