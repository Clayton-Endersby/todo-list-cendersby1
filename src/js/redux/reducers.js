import {getStore} from './../redux/store'

const reducers = function({action,payload, ...rest}){
    switch(action.type){
        case "edit": return "edit an employee";
        case "delete": return "remove an employee";
        case "add": return "add a new employee";
        default: return getStore()
    }
}

export {reducers}