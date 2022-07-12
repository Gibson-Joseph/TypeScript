//UNION AND ALIAS

//union operator in typescript:

let userName: string | number = 9;
console.log(userName);
userName = "gibson";
console.log(userName);

//union operator to compain data type.

export interface IUser {
  name: string;
  age?: number;
}

const user1: IUser = {
  name: "gibson",
  age: 21,
};

let errorMessage: string | IUser | null | number | string[] | object = 6;
console.log(errorMessage);

//Typealias :

type ID = string;
type popularTag = number | ID; //<-- Union + typealias:

interface Idetail {
  id: ID;
}

const stringTag: popularTag[] = ["g", "i", "n", "b", "s", "o", "n"];

console.log(stringTag);
let num: ID = "hii";
console.log(num);

////////////////////////
