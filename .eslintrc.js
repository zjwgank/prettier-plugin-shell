module.exports = {
    env:{
        browser:true,
        node:true,
        commonjs:true
    },
    extends:["eslint:recommended"],
    rules:{
        "semi":[2,"never"]
    },
    parserOptions:{
        ecmaVersion:7,
        sourceType:"module"
    }
}