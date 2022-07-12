"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detail = void 0;
function detail(person) {
    console.log(person.id);
    console.log(person.name);
    if (person.email != undefined) {
        console.log(person.email);
    }
}
exports.detail = detail;
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
console.log("<------rest Parameter------->");
function sumOfNumber(...num) {
    let sum = 0;
    for (let i = 0; i <= num.length - 1; i++) {
        sum += num[i];
    }
    console.log(sum);
}
sumOfNumber(1, 2, 3, 4);
sumOfNumber(10, 20, 30, 40);
console.log("<--------Default Parameter------>");
function defaultParameter(item, rate = 50) {
    let total = item * rate;
    console.log(total);
}
defaultParameter(2);
defaultParameter(2, 30);
//# sourceMappingURL=parameter.js.map