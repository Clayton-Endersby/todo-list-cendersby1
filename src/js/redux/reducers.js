import {getStore, updateStore} from './store'
 

function reducer(action) {

    switch(action.type) {
        case "delete":
            const deleteStore = getStore();       
            const deleteIndex = action.payload.index;         
            const newStore = [...deleteStore.slice(0, deleteIndex), ...deleteStore.slice(deleteIndex + 1)]
            updateStore(newStore)
            action.cb()
            return  deleteStore;

        case "edit":
            console.log('hello')
            const editStore = getStore();
            const editIndex = action.payload.index;
            editStore[editIndex].category = action.payload.category;
            editStore[editIndex].description = action.payload.description;
            editStore[editIndex].isComplete = action.payload.isComplete;
            action.cb()
        return editStore;

        case "add":
            console.log('hello')
            // const addStore = getStore();
            // const addIndex = action.payload.index;
            // addStore[addIndex].category = action.payload.category;
            // addStore[addIndex].description = action.payload.description;
            // addStore[addIndex].isComplete = false;
            // action.cb()
        return addStore;
    }

}
export default reducer 