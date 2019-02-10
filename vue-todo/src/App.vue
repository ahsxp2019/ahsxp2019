<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoFooter from './components/TodoFooter.vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'


export default {
        data: function(){
        return{
            todoItems: []
        }
    },
    methods:{
     // addOneItem(todoItem){       
      //    const obj = {completed: false, item: todoItem}          
     //     localStorage.setItem(todoItem,JSON.stringify(obj));
      //    this.todoItems.push(obj);

      //    },
    //   removeOneItem(todoItem, index){
    //       localStorage.removeItem(todoItem.item);
    //       this.todoItems.splice(index,1);
    //       },
    //   clearOneTodo(){
    //       localStorage.clear();
    //       this.todoItems = [];
    //   },
    //   toggleOneCompleted(todoItem, index){
    //       //todoItem.completed = !todoItem.completed;
    //       console.log("toggleOneCompleted");
    //       this.todoItems[index].completed = ! this.todoItems[index].completed;
    //       localStorage.removeItem(todoItem.item);
    //       localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
     //}    




},
 
  components:{
 
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
 /* 'TodoHeader': TodoHeader,
  'TodoInput': TodoInput,
  'TodoList': TodoList,
  'TodoFooter': TodoFooter  */
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #F6F6F6;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
