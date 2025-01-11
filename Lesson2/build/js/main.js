"use strict";
// This don't work in interfeces
// interface postId= stringOrNumber
//Literal Types
let username;
username = "Mahi";
//This works the same
// interface mathFunction{
//     (a:number,b:number):number
// }
function add(a, b) {
    return a + b;
}
console.log(add(3, 5));
let multiply = function (c, d) {
    return c * d;
};
let substract = function (c, d) {
    return c - d;
};
// Optional parameters
function greet(name, age) {
    let introduce = `I'm ${name}`;
    if (age) {
        introduce += ` a ${age} years old programmer.`;
    }
    introduce += ".";
    return introduce;
}
console.log(greet("Peniel", 21));
console.log(greet("Haylu"));
// Default paramater
function person(name, job = "Unemployed") {
    return {
        name,
        job,
    };
}
// console.log(person("Peniel"));
// Rest Parameter
function total(...nums) {
    return nums.reduce((curr, acc) => curr + acc);
}
// console.log(total(14, 10));
const errorPage = (errorMsg) => {
    throw new Error(errorMsg);
};
