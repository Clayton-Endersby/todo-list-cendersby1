/* 
    Keys
    Add a unique id to objects
    
    Rename an Module Export
    {v4 as uuidv4}
    import v4 as (renaming a module that is export)

    Rename a default module export
    import fetcher from './../utils/dataFetcher.js
*/
import {v4 as uuidv4} from 'uuid'

// object
const keyGenerator = function(data=[]){
     const keyData = data.map(item=>{
         item.id = uuidv4().substr(0,8)
         return item
     })
      return keyData
     
}

export {keyGenerator}