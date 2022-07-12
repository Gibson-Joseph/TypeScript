export const fullName = (firstName:string,lastName:string)=>{
  console.log(`full name is ${firstName} ${lastName}`);
}
fullName("Gibson", 'Joseph' )

//  DEFINING A FUNCTION:
const age = (currentYear:number,bornYear:number):number=>{
  return currentYear-bornYear
}
console.log(age(2022, 2000));