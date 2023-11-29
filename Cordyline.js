/* Import Functions */
import { Define } from './Define.js'
import { Start } from './Funcs/Start.js'
import { CreateTemplate } from './Funcs/CreateTemplate.js'
import { AddTemplate } from './Funcs/AddTemplate.js'

let Cordyline = {
    Define,
    Start,
    CreateTemplate,
    AddTemplate
}

Cordyline.Define()

export { Cordyline }