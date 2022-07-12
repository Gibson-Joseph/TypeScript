# TypeScript:

- TypeScript is a superset of typed JavaScript (optional) that can help build and manage large-scale JavaScript projects. It can be considered JavaScript with additional features like strong static typing, compilation, and object-oriented programming.

# Why TypeScript is better?
- TypeScript always points out the compilation errors at the time of development (pre-compilation). Because of this getting runtime errors is less likely, whereas JavaScript is an interpreted language.

- TypeScript supports static/strong typing.
---

- TypeScript files can’t be executed in the browser.

# Variable in TypeScript:
- We define variables with var, let, and const.
- The type syntax for declaring a variable in TypeScript is to include a colon (:)
- after the variable name, followed by its type.

# Explicit vs Implicit:
# Implicit:
- Implicit types come from TypeScript inferring the type based on a variable's initial value and look just like regular JavaScript.

Example:

```javascript
let hello:string=” Gibson”
```

Explicit:
Explicit types are when we intentionally provide the type using a special TypeScript syntax.

Example:

```javascript
let hello=” Gibson”
```
---

# Function in TypeScript:
- Functions are the building blocks of readable, maintainable, and reusable code. A function is a set of statements to perform a specific task.
- Writing a function in typescript is similar to writing them in JavaScript but with added parameters and return type.

Example:

```javascript
Function functionName(arg1:type, arg2:type): returnType{
//Function body
}
```
---

# Interface:
- This is the biggest advantage over javascript.
- A group of parameters may be all of them belong to a single concept.
- We can also reuse this in multiple places.

---

# TypeScript - Union Operator:
- TypeScript allows us to use more than one data type for a variable or a function parameter. This is called union type.
- Union - Operator to combine data type.

Syntax:
( Type1 | Type2 | Type3 | … | TypeN )

# Type Aliases in TypeScript:
- In Typescript, Type aliases give a type a new name.

Syntax:
type type_alias = number | string

# Any / Void / Never / Unknown:
# Void in TypeScript:
- void is used where there is no data.
- When we don’t return anything it’s void.
- Void is a set of Undefined and Null.

# Any in TypeScript:
- The any type allows us to assign literally “any” particular value to that variable.
- Any type turns of TypeScript Checks.

# Never in TypeScript:

- Function with never can’t be executed to the end.
- The never type contain no value.

# Unknown in TypeScript:

- Unknown was introduce in typescript 3
- We can’t assign unknown directly in other type.

# Type Assertion in TypeScript:
- “as” operator make type assertion.

---

# Class in TypeScript:
- A class in terms of OOP is a blueprint for creating objects.
- Classes are the fundamental entities which are used to create reusable components. It is a group of objects which have common properties. In terms of OOPs, a class is a template or blueprint for creating objects. It is a logical entity.

# Public:
By default, all members of a class in TypeScript are public. All the public members can be accessed anywhere without any restrictions.

# Private:
Private means that we can use it only inside a class.

# Protected:
Protected is allowed in class and it’s children.

# Read only in TypeScript:
Prefix readonly is used to make a property as read-only. Read-only members can be accessed outside the class, but their value cannot be changed.

---

# Inheritance:
- A class can reuse the properties and methods of another class. This is called inheritance in TypeScript.

# Generics:
- TypeScript generics is a tool for creating reusable components in typescript.
Rather than working with a single data type, it builds a component that can interact with various data kinds. 

# Enum:
- A group of constant.
- That can assign a number to your String and make an easy comparison.
- Enum role {value}

---