import makeElement from './../utils/makeElement'
import link from './../components/ui/link'

const index = function() {
    const page = document.createElement('div')
    const todoListLink = link("Go to your to-dos", '/directory')
    const template = `
        <header class="ui-header">
        <h1>WORLD'S BEST ORGANIZER</h1>
        </header>
    `;
    const pageHeader = makeElement(template);
    pageHeader.append(todoListLink);
    page.append(pageHeader);

    return page
}

export default index