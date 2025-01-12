// Generics

const stringEcho = (arg: string): string => arg;

const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj({ name: "John" }));

const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  return {
    arg,
    is: !!arg,
  };
};

interface HasId {
  id: number;
}

const processUser = <T extends HasId>(user: T): T => {
  // process the user with logic here
  return user;
};

// console.log(processUser({id:1,name:'Dave'}));
