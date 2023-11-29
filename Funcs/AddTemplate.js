import { App } from '../Define.js'

function AddTemplate(template, parent){
    /* The Template will be inside the Parent
    *
    *  #Templates can is added one inside other 
    *    ----------------------------------------------
    *   THIS FUNCTION RETURN THE PARENT WITH OBJECT NODE
    * */ 

    parent = parent == undefined ? App : parent

    parent.append(template.templateDiv)

    function runCode(){
        template.runCode()
    }

    return {
        runCode
    }
}


export { AddTemplate }