"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    name: "gibson",
    age: 21,
};
const user2 = {
    name: "joseph",
    age: 21,
};
const user3 = {
    name: "javaScript",
};
console.log(user2.name);
console.log(user1.name);
console.log(user3.name);
const fullName = {
    fname: "gibson",
    lname: "joseph",
    getMessage() {
        return `your name is ${this.fname} ${this.lname}`;
    }
};
//# sourceMappingURL=interfaces.js.map