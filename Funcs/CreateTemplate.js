function CreateTemplate(idORclass, name, contentHTML, contentCSS){
    /*  -----Exemple------
    * export let iAmDuckTemplate = CreateTemplate('id', 'Duck', () => {
    *       return `
    *           <h2 id="iAmDuck"> I Am Duck :V </h2>
    *       `
    *     }, (n) => {
    *       return `
    *       ${n} #iAmDuck {
    *           background: yellow;
    *       }
    *      `
    *   }) 
    */

    //-------------------------//
    let cssNameTemplate = ''

    if (idORclass === 'id'){
        cssNameTemplate = '#'
    }

    if(idORclass === 'class'){
        cssNameTemplate = '.'
    }

    cssNameTemplate += `${name}`
    //-------------------------//

    //-------------------------//
    let templateDiv = document.createElement('div')
    let templateCSS = document.createElement('style')

    //-------------------------//
    templateDiv.setAttribute(`${idORclass}`, `${name}`)
    templateCSS.setAttribute('id', `${name}-CSS`)
    
    //-------------------------//
    templateDiv.innerHTML = contentHTML == undefined ? `` : contentHTML()
    templateCSS.innerHTML = contentCSS == undefined ? `` : contentCSS(cssNameTemplate)
    
    //-------------------------//
    templateDiv.append(templateCSS)

    //-------------------------//

    const templateOBJ = {
        templateDiv,

        code: null,

        logic(code){
            this.code = code
        },

        runCode(){
            return this.code()
        }

    }

    return templateOBJ

}

export { CreateTemplate }
