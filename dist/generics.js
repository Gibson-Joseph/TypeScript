"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addId = void 0;
const addId = (obj) => {
    const id = Math.random();
    return Object.assign(Object.assign({}, obj), { id });
};
exports.addId = addId;
const user = {
    name: "Gibson",
};
console.log((0, exports.addId)(user));
console.log((0, exports.addId)(user));
//# sourceMappingURL=generics.js.map