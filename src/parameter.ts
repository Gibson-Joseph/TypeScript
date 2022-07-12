interface Person {
  id: number;
  name: string;
  email?: string;
}

// function detail(id: number, name: string, mail?: string) {
export function detail(person: Person) {
  console.log(person.id);
  console.log(person.name);
  if (person.email != undefined) {
    console.log(person.email);
  }
}

var user = {
  id: 2,
  name: "ginson",
  email: "klr@gmail.com",
};
var user1 = {
  id: 3,
  name: "Joseph",
};
detail(user);
detail(user1);

// detail(2, "joseph", "klr11@gmail.com");

//////////////////////////
//rest parameters:

console.log("<------rest Parameter------->");

function sumOfNumber(...num: number[]) {
  // console.log(num);
  let sum: number = 0;
  for (let i = 0; i <= num.length - 1; i++) {
    sum += num[i];
  }
  console.log(sum);
}

sumOfNumber(1, 2, 3, 4);
sumOfNumber(10, 20, 30, 40);

//////////////////
//Default Parameter:

console.log("<--------Default Parameter------>");

function defaultParameter(item: number, rate: number = 50) {
  let total = item * rate;
  console.log(total);
}
defaultParameter(2);
defaultParameter(2, 30);
