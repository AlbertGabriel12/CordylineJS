let body = document.querySelector('body')
let App = document.createElement('div')

function Define() {
    //-------------------------//
    App.id = 'App'
    body.prepend(App)
    //-------------------------//

    //-------------------------//
    let styleMain = document.createElement('style')
    styleMain.innerHTML = `
    *{
        padding: 0;
        margin: 0;
        border: none;
        box-sizing: border-box;
    }

    body{
        overflow: hidden;
    }
    `

    App.append(styleMain)
    //-------------------------//
}

export { Define, App }
