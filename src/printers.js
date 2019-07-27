// const { concat, join, line, ifBreak, group } = require("prettier").doc.builders

module.exports = {
    "sh-ast":{
        print:(path,options,print)=>{
            console.log(path,'====path')
            console.log(options,'====options')
            console.log(print,'=====print')
        }
    }
}