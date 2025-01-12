// Classes

class Coder {
  // name: string;
  // music: string;
  // age: number;
  // lang: string;

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
  public getAge(): string {
    return `Hello, I'm ${this.age}`;
  }
}

const Peni = new Coder("Peniel", "Rock", 21);
// console.log(Peni.getAge());

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
}

const PeniWebDev = new WebDev("HP", "Peniel", "Rock", 31);
// console.log(PeniWebDev.getLang());

////////////////////////////////////////

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.instrument = instrument;
    this.name = name;
  }
  play(action: string): string {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}
const Joshu = new Guitarist("Joshu", "Guitar");
console.log(Joshu.play("strums"));
//////////////////////////////

class Peeps {
  // Static key word means count doesn't  apply to any instatiation of the class, it applies to the class directly itself.
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }
  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}
const John = new Peeps("John");
const Amy = new Peeps("Amy");
const Steve = new Peeps("Steve");

// console.log(Peeps.count);
// console.log(Amy.id);

///////////////////////////////////////////////////////

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }
  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"];
console.log(MyBands.data);
MyBands.data = ["Neil Young"];
console.log(MyBands.data);
