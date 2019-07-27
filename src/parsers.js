import parse from 'bash-parser'

export default {
    shell:{
        astFormat:'sh-ast',
        parse:(text,parsers,options) => {
            console.log(text,'====text')
            console.log(parsers,'=====parsers')
            console.log(options,'=====options')
            console.log(text,parse(text),'=============')
            return parse(text)
        }
    }
}