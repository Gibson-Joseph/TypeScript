export interface User {
  name: string;
  age?: number;
}

const user1: User = {
  name: "gibson",
  age: 21,
};

const user2: User = {
  name: "joseph",
  age: 21,
};

const user3: User = {
  name: "javaScript",
};

//BEST AUTOCOMPLITE:
console.log(user2.name);
console.log(user1.name);
console.log(user3.name);

//FUNCTION INTERFACE:
interface IName {
  fname: string;
  lname?: string;
  getMessage?(): string;
}

const fullName: IName = {
  fname: "gibson",
  lname:"joseph",
  getMessage(){
     return `your name is ${this.fname} ${this.lname}`
    //  return 'your name is'+ this.fname
  }
};
// console.log(fullName.getMessage());
