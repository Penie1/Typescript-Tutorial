// Type Assertion or Type Casting

type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific

let a: One = "hello";
let b = a as Two; // less specific
// b= 3;
let c = a as Three; // more specific
// c = "hello";

//  We can assert in this way but not in react
let d = <One>"Word";
let e = <string | number>"word";
///////////////////////

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};
let myVal: string = addOrConcat(1, 2, "concat") as string;

// Be careful! TS sees no problem- but a string is returned

let nextVal: number = addOrConcat(3, 2, "concat") as number;

// 10 as string
// (10 as unknown) as string

// The DOM

const img = document.getElementById("img") as HTMLImageElement;
const header = document.querySelector("#header") as HTMLHeadingElement;
const header2 = <HTMLHeadingElement>document.querySelector("#header-2"); // This will not work in tsx file in react
const paragraph = document.getElementById("paragraph")!; // It tells TS that this will not be null
img.src = "/something";
