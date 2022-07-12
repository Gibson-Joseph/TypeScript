const num=1
// num=2;  <-- can not re assign
let a='joseph';
a='gibson;'

let b:string='TypeScript'
b='JavaScript'
export{}

///////////////////////

//void in TypeScript:
//void is set of undefined and null

const doSomething=():void=>{
  // console.log('doSomething');
  // return 'gibbs' <-- not return
  // return 'gibbs'
}
console.log(doSomething()); 

//ANY TYPE:

//ANY type turns off typescript checks

let foo:any='gibson';
foo=[1,2,3,4]
foo={
  name:"gibson"
}
foo=13

//ANY is not solution but start of bigger problems.

///////////////

//NEVER TYPE:



//UNKNOWEN TYPE:
 let vAny:any=10;
 let vUnknown:unknown=10;

 let s1:string=vAny
 console.log(s1);

// let s2:string=vUnknown
// console.log(s2);  //<-- throw the error.

//type unknown is not assiginable to another type.

/////////////////

//TYPE ASSERETION 

//convert one type to another type.

//"as" operator makes type assertion 

let aserrtion:unknown=10
let as1:number=aserrtion as number;
console.log(as1);

let pageNumber:string='1'
let numericPageNumber:number=(pageNumber as unknown) as number

//it's importent to fully read and understand TS errors

console.log(numericPageNumber);