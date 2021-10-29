import directory from '../components/cards/directory'
// import makeElement from '../utils/makeElement';
import { getStore } from '../redux/store';
import todoItem from '../components/cards/todoItem';
 
const directoryPage = function(){
    const page = document.createElement('div')
    const container = directory();
    const employeeList = getStore();

    if (employeeList.length !== 0) {
        const elements = employeeList.map(emp=>{
            return todoItem(emp)
        })
        const ul = container.querySelector('#todos')
        elements.forEach(elem => {
            ul.append(elem)
        })
        page.append(container)
    }

    return page
}

export default directoryPage