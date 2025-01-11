//Type Aliases
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type Guitarist = {
  name: string;
  isActive: boolean;
  album: stringOrNumberArray;
};

type userId = stringOrNumber;

// This don't work in interfeces

// interface postId= stringOrNumber

//Literal Types

let username: "Jhon" | "Peni" | "Mahi";

username = "Mahi";
// username ="Rachel" <= Not work

// Functions

type mathFunction = (a: number, b: number) => number;

//This works the same
// interface mathFunction{
//     (a:number,b:number):number
// }

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(3, 5));
let multiply: mathFunction = function (c, d) {
  return c * d;
};

let substract: mathFunction = function (c, d) {
  return c - d;
};

// Optional parameters

function greet(name: string, age?: number): string {
  let introduce: string = `I'm ${name}`;

  if (age) {
    introduce += ` a ${age} years old programmer.`;
  }
  introduce += ".";
  return introduce;
}

console.log(greet("Peniel", 21));
console.log(greet("Haylu"));

// Default paramater

function person(name: string, job: string = "Unemployed"): object {
  return {
    name,
    job,
  };
}

// console.log(person("Peniel"));

// Rest Parameter

function total(...nums: number[]): number {
  return nums.reduce((curr, acc) => curr + acc);
}

// console.log(total(14, 10));

const errorPage = (errorMsg: string): never => {
  throw new Error(errorMsg);
};
