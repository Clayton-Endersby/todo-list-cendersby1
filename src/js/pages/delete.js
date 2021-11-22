import makeElement from "~/src/js/utils/makeElement"
import button from "~/src/js/components/ui/button"
import {Router} from "~/src/js/routes/router"
import { getStore } from "~/src/js/redux/store"
import reducer from "~/src/js/redux/reducers"

const cancelButton = button("cancel")
const deleteButton = button("delete")
console.log()
const deletePage = function(props){
    const page = document.createElement('div') 

    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelDelete)  
        deleteButton.removeEventListener('click', onRemoveTodo)
    }

    function onCancelDelete (e){
        cleanUp()
        Router('/directory')
    }

    function onRemoveTodo (e){ 
        if(props !== null){           
        Router('/directory')
                const removeTodo = props
                const index = getStore().findIndex(todo => todo.id === removeTodo.id)
                const action  = {
                type:"delete",
                payload:{index},
                cb:()=> Router('/directory')
            }
            reducer(action)
            cleanUp()
        }
    }
    
    let headerTemplate = `
        <header class="welcome center-in-page">
            <h1>Delete To-Do</h1>
            <div></div>
        </header>
    `
    const pageHeader = makeElement(headerTemplate) 
    pageHeader.querySelector('div').innerHTML = ''
    cancelButton.addEventListener('click', onCancelDelete)  
    deleteButton.addEventListener('click', onRemoveTodo) 
    pageHeader.querySelector('div').append(cancelButton, deleteButton)
    page.append(pageHeader)

    return page
}
export default deletePage