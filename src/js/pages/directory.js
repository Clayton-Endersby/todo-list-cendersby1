import makeElement from '../utils/makeElement';
import directory from '../components/cards/directory';
import todoItem from '../components/cards/todoItem';
import { getStore } from '../redux/store';
import { Router } from '../routes/router';

const directoryPage = function(){
    
    function onDeleteTodo (e){
    const todoId = e.currentTarget.dataset.key
    const todo = getStore().filter((todo) => todo.id === todoId)
    Router('/delete', todo[0])
    }

    function onEditTodo (e){
        const todoId = e.currentTarget.dataset.key
        const todo = getStore().filter((todo) => todo.id === todoId)
        Router('/edit', todo[0])
    }

    function onAddTodo (e){
        const todoId = e.currentTarget.dataset.key
        const todo = getStore().filter((todo) => todo.id === todoId)
        Router('/add', todo[0])
    }
    const page = document.createElement('div')
    const container = directory();
    const employeeList = getStore();

    if (employeeList.length !== 0) {
        const elements = employeeList.map(emp=>{
            return todoItem(emp)
        })
        const ul = container.querySelector('#todos')
        elements.forEach(elem => {
            elem.querySelector('#delete').addEventListener('click', onDeleteTodo)
            elem.querySelector('#edit').addEventListener('click', onEditTodo)
            ul.append(elem)
        })
        page.append(container)

        setTimeout(() => {
            document.querySelector('#add').addEventListener('click', onAddTodo)
        }, 500);
    }
    return page
}

export default directoryPage