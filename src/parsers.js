const parse = require("bash-parser")

module.exports = {
    shell:{
        astFormat:'sh-ast',
        parse:(text,parsers,options) => {
            console.log(text,'====text')
            console.log(parsers,'=====parsers')
            console.log(options,'=====options')
            console.log(text,parse(text),'=============')
            return parse(text)
        },
        locStart:(node)=>{
            console.log(node,'=====start')
        },
        locEnd:(node) => {
            console.log(node,'=====end')
        },
        hasPragma:(text) =>{
            console.log(text,'====pragma')
        },
        preprocess:(text,options) =>{
            console.log(text,options,'=====process')
        }
    }
}