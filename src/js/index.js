import {Router} from "./routes/router";
import {createStore} from "./redux/store"
import { dataFetcher } from "./utils/dataFetcher";
import { keyGenerator } from "./utils/keys";

const onAppInit = async function(e){
  const todos = await dataFetcher('./data/todos.json')
  createStore(keyGenerator(todos))
  Router(window.location.pathname)

  

  function onAddTodo (e){
    const todoId = e.currentTarget.dataset.key
    const todo = getStore().filter((todo) => todo.id === todoId)
    Router('/add', todo[0])
  }
}

window.addEventListener('load', onAppInit)

 
 



 
 

 