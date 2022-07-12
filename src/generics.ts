//Generics in TypeScript:

export const addId = <T>(obj: T) => {
  const id = Math.random();
  return {
    ...obj,
    id,
  };
};

const user = {
  name: "Gibson",
};

console.log(addId(user));
console.log(addId(user));
