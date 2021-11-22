import home from "../pages/index";
import directory from "../pages/directory";
import deletePage from "~/src/js/pages/delete";
import editPage from "~/src/js/pages/edit";
import notFound from "../pages/notFound";
import addPage from "../pages/add";

const routes = {
    "/":home,
    "/directory":directory,
    "/delete":deletePage,
    "/edit":editPage,
    "/add":addPage,
    "/notFound":notFound
}

const Router =  function (pathname, params=null)   {
    const isValidRoute = Object.keys(routes).find(key => key===pathname)
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
    if(isValidRoute === undefined || isValidRoute ===''){
        app.append(notFound())
    }else{
        app.appendChild(routes[isValidRoute](params))
    }
}

export {Router}