import makeElement from './../utils/makeElement'
import link from './../components/ui/link'

const notFound = function() {
    const page = document.createElement('div')
    const backToSafety = link("Back to to-dos", '/directory')
    const template = `
        <header class="ui-header">
        <h1>Page Not Found</h1>
        </header>
    `;
    const pageHeader = makeElement(template);
    pageHeader.append(backToSafety);
    page.append(pageHeader);

    return page
}

export default notFound