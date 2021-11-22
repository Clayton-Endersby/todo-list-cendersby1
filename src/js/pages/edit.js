import makeElement from "~/src/js/utils/makeElement"
import button from "~/src/js/components/ui/button"
import {Router} from "~/src/js/routes/router"
import { getStore } from "~/src/js/redux/store"
import reducer from "~/src/js/redux/reducers"

const cancelButton = button("cancel")
const editButton = button("Edit")

const editPage = function(props){
    const page = document.createElement('div') 

    function cleanUp (){
        cancelButton.removeEventListener('click', onCancelEdit)  
        editButton.removeEventListener('click', onEditTodo)
    }

    function onCancelEdit (e){
        cleanUp()
        Router('/directory')
    }

    function onEditTodo (e){ 
        
        const category = document.querySelector('#categories').value
        const description = document.querySelector('#description').value
        const isComplete = document.querySelector('#isComplete').checked
        if(props !== null){           
        Router('/directory')
                const editTodo = props
                const index = getStore().findIndex(todo => todo.id === editTodo.id)
                const action  = {
                type:"edit",
                payload:{index, category, description, isComplete},
                cb:()=> Router('/directory')
            }
            reducer(action)
            cleanUp()
        }
    }
    
    let template = `
        <header class="welcome center-in-page">
            <h1>Edit To-Do</h1>
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

                    <p>Completed?</p>
                    <label for="isComplete">Yes</label>
                    <input type="radio" name="isComplete" id="isComplete" value="true">
                    <label for="isComplete">No</label>
                    <input type="radio" name="isComplete" id="isComplete" value="false">
                </form>
            </div>
        </header>
    `
    
    const editPage = makeElement(template)
    cancelButton.addEventListener('click', onCancelEdit)
    editButton.addEventListener('click', onEditTodo)
    editPage.querySelector('div').append(cancelButton, editButton)
    page.append(editPage)

    return page
}
export default editPage