//Basic types
let num: number = 2;
let isActive: boolean;
isActive = true;

let nameOrId: string | number; //Union type
nameOrId = "Peniel";
nameOrId = 99;

let regex: RegExp = /\w/g;

// Array and Object

let names: string[];

names = ["Peniel", "Bekele"];

let price: (string | number)[];
price = ["100 birr", 200];

// Tuple

let myTuple: [string, string, string];

myTuple = ["Hello", "World", "!"];

// Object

let myObj: object;
// In Vanilla Javascript beside object, array and functions are also an object.
myObj = [];
myObj = function () {};
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
let user: {
  firstName: string;
  lastName: string;
  userId: number;
};

user = {
  firstName: "Peniel",
  lastName: "Bekele",
  userId: 99,
};

type Guitairist = {
  name: string;
  active?: boolean;
  album: (number | string)[];
};

// It does the same thing like type but they have their own use cases.

// interface Guitairist  {
//     name: string;
//     active?: boolean;
//     album: (number | string)[];
//   };

const joshwa: Guitairist = {
  name: "Joshwa",
  album: ["Keber geta", 1999],
};

const eddie: Guitairist = {
  name: "Eddie",
  active: true,
  album: ["Rockstar"],
};

const greetGuitarist = (guitarist: Guitairist): string => {
  if (guitarist.active) {
    return `Hello I'm ${guitarist.name}`;
  }
  return "Sorry we only show active guitarist";
};
console.log(greetGuitarist(joshwa));

//Enums

enum Grade {
  A = 1,
  B,
  C,
  D,
  F,
}
