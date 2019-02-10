import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage ={
    fetch() {
        const arr = [];
       if(localStorage.length > 0){
            for(let i = 0 ; i < localStorage.length ; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }   
            }
        }
        return arr;
    }
};

export const store = new Vuex.Store({
    state:{
        todoItems: storage.fetch()
    },
    getters:{
        storedTodoItems(state){
            console.log('getters');
            return state.todoItems;
        }
    },
    mutations:{
        addOneItem(state, todoItem ){
           // console.log('store.js');
            const obj = { completed: false, item: todoItem};         
            localStorage.setItem(todoItem,JSON.stringify(obj));
            state.todoItems.push(obj);
        },
        removeOneItem(state, playload){

            localStorage.removeItem(playload.todoItem.item);
            state.todoItems.splice(playload.index,1);
        },
         clearOneTodo(state){
             localStorage.clear();
             state.todoItems = [];
        },
        toggleOneCompleted(state, toggle){
           
            state.todoItems[toggle.index].completed = ! state.todoItems[toggle.index].completed;
            localStorage.removeItem(toggle.todoItem.item);
            localStorage.setItem(toggle.todoItem.item, JSON.stringify(toggle.todoItem));
        }
    }
});

