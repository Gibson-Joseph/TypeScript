// CLASS IN TS:
export class User {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    (this.firstName = firstName), (this.lastName = lastName);
  }
  getFullName(): string {
    return `your name is ${this.firstName} ${this.lastName}`;
  }
}

const user = new User("Gibson", "Joseph");
console.log(user.getFullName());
console.log(user.firstName); //<-- it is public

//Every thing is public by default.

////////////////////////////

// privat

// it means that we can use it only inside a class.

class User1 {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    (this.firstName = firstName), (this.lastName = lastName);
  }
  getFullName(): string {
    return `your name is ${this.firstName} ${this.lastName}`;
  }
}

const user1 = new User1("kl", "rahul");
console.log(user1.getFullName());
// console.log(user1.firstName); //<-- it is private.

///////////////////////////

//PROTECTED:
//protected is allowed in class and it's childran.

/////////////////////
//READONLY PROPERTY:

class User2 {
  firstName: string;
  lastName: string;
  readonly unChangeable: string; //<--cann't reasssign value

  constructor(firstName: string, lastName: string) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.unChangeable = firstName);
  }

  // changeUncahangeable =():void=>{
  //   this.unChangeable='TypeScript'  //<-- can not change value
  // }

  getFullName(): string {
    return `your name is ${this.firstName} ${this.lastName}`;
  }
}

const user2 = new User2("Java", "Script");
console.log(user2);

/////////////////////////////////////////

//IMPLIMENTING INTERFACE:

interface UserInterface {
  getFullName(): string;
}

class User3 implements UserInterface {
  firstName: string;
  lastName: string;
  readonly unChangeable: string; //<--cann't reasssign value

  constructor(firstName: string, lastName: string) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.unChangeable = firstName);
  }

  getFullName(): string {
    //<-- impliment
    return `your name is ${this.firstName} ${this.lastName}`;
  }
}

const user3 = new User3("Type", "Script");
console.log(user3);

/////////////////////////////////

//STATIC PROPERTIES:
class User4 {
  firstName: string;
  lastName: string;
  readonly unChangeable: string; //<--cann't reasssign value
  static readonly maxAge = 40; //<-- Static propertie accessable class itself

  constructor(firstName: string, lastName: string) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.unChangeable = firstName);
  }

  getFullName(): string {
    return `your name is ${this.firstName} ${this.lastName}`;
  }
}

const user4 = new User4("Java", "Script");
console.log(user4);
// console.log(user4.maxAge);  //<--cannot access property
console.log(User4.maxAge); //<-- access property in class

///////////////////////////////
//INHERITANCE IN TYPESCRIPT:

class User5 {
  firstName: string;
  lastName: string;
  readonly unChangeable: string; //<--cann't reasssign value

  constructor(firstName: string, lastName: string) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.unChangeable = firstName);
  }

  getFullName(): string {
    return `your name is ${this.firstName} ${this.lastName}`;
  }
}

const user5 = new User5("hello", "world");
console.log(user5);

console.log("<---- Inheritance ---->");

class Admin extends User {
  //<-- Inheritance
}

const newAdmin = new Admin("JavaScript", "TypeScript");
console.log(newAdmin.getFullName());
