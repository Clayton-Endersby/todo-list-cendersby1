import makeElement from "~/src/js/utils/makeElement"
import button from "~/src/js/components/ui/button"
import {Router} from "~/src/js/routes/router"
import { getStore } from "~/src/js/redux/store"
import reducer from "~/src/js/redux/reducers"

const cancelButton = button("Cancel")
const addButton = button("Add")

const addPage = function(props){
    const page = document.createElement('div') 

    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelAdd)  
        addButton.removeEventListener('click', onAddTodo)
    }

    function onCancelAdd (e){
        cleanUp()
        Router('/directory')
    }

    function onAddTodo (e){ 
        
        const category = document.querySelector('#categories').value
        const description = document.querySelector('#description').value
        console.log(category)
        if(props !== null){           
            Router('/directory')
            const addTodo = props
            const index = getStore().findIndex(todo => todo.id === addTodo.id)
            const action  = {
            type:"add",
            payload:{index, category, description},
            cb:()=> Router('/directory')
        }
            reducer(action)
            cleanUp()
        }
    }
    
    let template = `
        <header class="welcome center-in-page">
            <h1>Add To-Do</h1>
            <div>
                <form action="" id="edit-form">
                    <label for="categories">Category</label>
                    <select name="categories" id="categories">
                        <option value="home">Home</option>
                        <option value="school">School</option>
                        <option value="health">Health</option>
                        <option value="friends">Friends</option>
                        <option value="work">Work</option>
                    </select>

                    <label for="description">Description</label>
                    <textarea name="description" id="description" cols="30" rows="10"></textarea>
                </form>
            </div>
        </header>
    `
    
    const addPage = makeElement(template)
    cancelButton.addEventListener('click', onCancelAdd)
    addButton.addEventListener('click', onAddTodo)
    addPage.querySelector('div').append(cancelButton, addButton)
    page.append(addPage)

    return page
}
export default addPage