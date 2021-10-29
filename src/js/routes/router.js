import home from "../pages/index";
import directory from "../pages/directory";
import notFound from "../pages/notFound";

const routes = {
    "/":home,
    "/directory":directory,
    "/notFound":notFound
}

const Router =  function (pathname)   {
    const isValidRoute = Object.keys(routes).find(key=> key===pathname)
    const app = document.querySelector('#app')
    app.innerHTML = ''

    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    
    if(isValidRoute === undefined){
        app.append(notFound())
    }else{
        app.appendChild(routes[window.location.pathname]())
    }
}

export {Router}