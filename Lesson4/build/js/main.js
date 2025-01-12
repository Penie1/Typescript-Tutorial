"use strict";
// Classes
class Coder {
    // name: string;
    // music: string;
    // age: number;
    // lang: string;
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Peni = new Coder("Peniel", "Rock", 21);
// console.log(Peni.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const PeniWebDev = new WebDev("HP", "Peniel", "Rock", 31);
class Guitarist {
    constructor(name, instrument) {
        this.instrument = instrument;
        this.name = name;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Joshu = new Guitarist("Joshu", "Guitar");
console.log(Joshu.play("strums"));
//////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
// Static key word means count doesn't  apply to any instatiation of the class, it applies to the class directly itself.
Peeps.count = 0;
const John = new Peeps("John");
const Amy = new Peeps("Amy");
const Steve = new Peeps("Steve");
// console.log(Peeps.count);
// console.log(Amy.id);
///////////////////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = ["Neil Young"];
console.log(MyBands.data);
