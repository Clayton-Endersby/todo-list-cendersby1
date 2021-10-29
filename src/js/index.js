import {Router} from "./routes/router";
import {createStore} from "./redux/store"
import { dataFetcher } from "./utils/dataFetcher";
import { keyGenerator } from "./utils/keys";

const onAppInit = async function(e){
  const employees = await dataFetcher('./data/todos.json')
  createStore(keyGenerator(employees))
  Router(window.location.pathname)
}

window.addEventListener('load', onAppInit)

 
 



 
 

 