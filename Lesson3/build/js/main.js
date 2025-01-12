"use strict";
// Type Assertion or Type Casting
// convert to more or less specific
let a = "hello";
let b = a; // less specific
// b= 3;
let c = a; // more specific
// c = "hello";
//  We can assert in this way but not in react
let d = "Word";
let e = "word";
///////////////////////
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(1, 2, "concat");
// Be careful! TS sees no problem- but a string is returned
let nextVal = addOrConcat(3, 2, "concat");
// 10 as string
// (10 as unknown) as string
// The DOM
const img = document.getElementById("img");
const header = document.querySelector("#header");
const header2 = document.querySelector("#header-2"); // This will not work in tsx file in react
const paragraph = document.getElementById("paragraph"); // It tells TS that this will not be null
img.src = "/something";
