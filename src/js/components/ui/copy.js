import makeElement from "../../utils/makeElement";

const copy = function (copy="ui copy", className="ui-copy"){
     const template = `<p class="${className}">${copy}</p>`
     const element = makeElement(template);

     return element

     
}

export default copy
