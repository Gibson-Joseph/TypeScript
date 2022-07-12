"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(firstName, lastName) {
        (this.firstName = firstName), (this.lastName = lastName);
    }
    getFullName() {
        return `your name is ${this.firstName} ${this.lastName}`;
    }
}
exports.User = User;
const user = new User("Gibson", "Joseph");
console.log(user.getFullName());
console.log(user.firstName);
class User1 {
    constructor(firstName, lastName) {
        (this.firstName = firstName), (this.lastName = lastName);
    }
    getFullName() {
        return `your name is ${this.firstName} ${this.lastName}`;
    }
}
const user1 = new User1("kl", "rahul");
console.log(user1.getFullName());
class User2 {
    constructor(firstName, lastName) {
        (this.firstName = firstName),
            (this.lastName = lastName),
            (this.unChangeable = firstName);
    }
    getFullName() {
        return `your name is ${this.firstName} ${this.lastName}`;
    }
}
const user2 = new User2("Java", "Script");
console.log(user2);
class User3 {
    constructor(firstName, lastName) {
        (this.firstName = firstName),
            (this.lastName = lastName),
            (this.unChangeable = firstName);
    }
    getFullName() {
        return `your name is ${this.firstName} ${this.lastName}`;
    }
}
const user3 = new User3("Type", "Script");
console.log(user3);
class User4 {
    constructor(firstName, lastName) {
        (this.firstName = firstName),
            (this.lastName = lastName),
            (this.unChangeable = firstName);
    }
    getFullName() {
        return `your name is ${this.firstName} ${this.lastName}`;
    }
}
User4.maxAge = 40;
const user4 = new User4("Java", "Script");
console.log(user4);
console.log(User4.maxAge);
class User5 {
    constructor(firstName, lastName) {
        (this.firstName = firstName),
            (this.lastName = lastName),
            (this.unChangeable = firstName);
    }
    getFullName() {
        return `your name is ${this.firstName} ${this.lastName}`;
    }
}
const user5 = new User5("hello", "world");
console.log(user5);
console.log("<---- Inheritance ---->");
class Admin extends User {
}
const newAdmin = new Admin("JavaScript", "TypeScript");
console.log(newAdmin.getFullName());
//# sourceMappingURL=class.js.map