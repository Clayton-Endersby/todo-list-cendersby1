import makeElement from './../../utils/makeElement'
const directory = function (){
    const template = `
    <aside id="directory" class="directory">
        <header>
            <h1>WORLD'S BEST ORGANIZER</h1>
            <h2>here are your to-dos</h2>
        </header>
        <ul id="todos" class="todos">
        
        </ul>
        <footer>

        </footer>
    </aside>
    `

    return makeElement(template)
}

export default directory