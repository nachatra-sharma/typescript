## Typescript provides you some basic types

- number, string, boolean, null, undefined.

## How to give types to arguments of a function

```typescript
function greet(firstName: string) {
  console.log(`Welcome to typescript ${firstName}`);
}

greet("Harkirat");
```

## How to assign a return type to a function

```typescript
function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(2, 3));
```

## Type inference

```typescript
function isLegal(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal(19));
```

## Create a function that takes another function as input, and runs it after 1 second.

```typescript
function callAfter1Second(cb: () => void, timer: number) {
  setTimeout(cb, timer);
}

callAfter1Second(function () {
  console.log("Hit after a sec.");
}, 1000);
```

## Interfaces

- A feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have.

## Implementing interfaces

- Implementing an interface in TypeScript means that a class or object adheres to a specific contract defined by the interface. It ensures that the class or object has the required properties and methods with the correct types, as specified in the interface.

## Types

- Very similar to interfaces , types let you aggregate data together.
- Learn about union and intersection

## Arrays

- Given an array of positive integers as input, return the maximum value in the array ?

```typescript
function getMax(array: number[]): number {
  let max = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}

const array = [4, 5, 2, 1, 5, 3, 2, 65, 7];

const ans = getMax(array);
console.log(ans);
```

- Given a list of users, filter out the users that are legal (greater than 18 years of age)

```typescript
const ListOfUser = [
  {
    firstName: "Rishi",
    lastName: "Sunak",
    age: 12,
  },
  {
    firstName: "Rishi",
    lastName: "Sharma",
    age: 21,
  },
  {
    firstName: "Rahul",
    lastName: "Sharma",
    age: 19,
  },
  {
    firstName: "Vishal",
    lastName: "Kumar",
    age: 18,
  },
];

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

const isLegalUser = ListOfUser.filter((user: User) => user.age > 18);

console.log(isLegalUser);
```
