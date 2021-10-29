import makeElement from './../utils/makeElement'
import link from './../components/ui/link'

const index = function() {
    const page = document.createElement('div')
    const todoListLink = backToSafety = link("Go to your to-dos", '/directory')
    const template = `
        <header class="ui-header">
        <h1>Index Page</h1>
        </header>
    `;
    const pageHeader = makeElement(template);
    pageHeader.append(todoListLink);
    page.append(pageHeader);

    return page
}

export default index