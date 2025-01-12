"use strict";
// Generics
const stringEcho = (arg) => arg;
const echo = (arg) => arg;
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj({ name: "John" }));
const isTrue = (arg) => {
    return {
        arg,
        is: !!arg,
    };
};
const processUser = (user) => {
    // process the user with logic here
    return user;
};
// console.log(processUser({id:1,name:'Dave'}));
