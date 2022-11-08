// code your solution here

function saturdayFun(arg = "roller-skate") {
  return `This Saturday, I want to ${arg}!`
}
console.log(saturdayFun( "bathe my dog"))

const mondayWork = function(val = "go to the office") {
    return `This Monday, I will ${val}.`
}
console.log(mondayWork())

function wrapAdjective(string) {
    return function(arg = "special") {
       return     `You are ${string}${arg}${string}!`
    }

}

let result = wrapAdjective("!!!")("a dedicated programmer")
console.log(result)