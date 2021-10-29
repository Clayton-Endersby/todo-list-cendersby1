let store = null;

const createStore = function(data=[]){
    if(store === null){
        store = [... data]
    }
}

const getStore  = function (){
    return store
}

export {createStore, getStore}