"use strict";

var Name: string = "gibson";
var score1: number = 20;
var score2: number = 10;
var sum = score1 - score2;
console.log(Name);
console.log(`first score ${score1}`);
console.log(`second score ${score2}`);
console.log(sum);

//type Asseretion in TypeScript:

var str = "1";
var str2: number = <number>(<any>str);
console.log(typeof str2);
console.log(str2);

/////////////

// inferred typing:
var num = 2;
console.log(`value of num ${num}`);
// num='12'   <-- throw the error
console.log(num);
