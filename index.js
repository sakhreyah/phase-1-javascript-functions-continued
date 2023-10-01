// code your solution here
function saturdayFun(parameter = "roller-skate") {
    return `This Saturday, I want to ${parameter}!`
}

const mondayWork = function (parameter = "go to the office") {
    return `This Monday, I will ${parameter}.`
}

function wrapAdjective(string = "*") {
    return function (parameter = "special") {
        return `You are ${string}${parameter}${string}!`
    }
}