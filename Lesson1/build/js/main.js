"use strict";
//Basic types
let num = 2;
let isActive;
isActive = true;
let nameOrId; //Union type
nameOrId = "Peniel";
nameOrId = 99;
let regex = /\w/g;
// Array and Object
let names;
names = ["Peniel", "Bekele"];
let price;
price = ["100 birr", 200];
// Tuple
let myTuple;
myTuple = ["Hello", "World", "!"];
// Object
let myObj;
// In Vanilla Javascript beside object, array and functions are also an object.
myObj = [];
myObj = function () { };
myObj = {};
let exampleObj = {
    firstName: "Peniel",
    student: true,
};
exampleObj = {
    firstName: "",
    student: false,
};
// Object annotation
let user;
user = {
    firstName: "Peniel",
    lastName: "Bekele",
    userId: 99,
};
// It does the same thing like type but they have their own use cases.
// interface Guitairist  {
//     name: string;
//     active?: boolean;
//     album: (number | string)[];
//   };
const joshwa = {
    name: "Joshwa",
    album: ["Keber geta", 1999],
};
const eddie = {
    name: "Eddie",
    active: true,
    album: ["Rockstar"],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.active) {
        return `Hello I'm ${guitarist.name}`;
    }
    return "Sorry we only show active guitarist";
};
console.log(greetGuitarist(joshwa));
//Enums
var Grade;
(function (Grade) {
    Grade[Grade["A"] = 1] = "A";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["D"] = 4] = "D";
    Grade[Grade["F"] = 5] = "F";
})(Grade || (Grade = {}));
