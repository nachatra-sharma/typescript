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

// Given a list of users, filter out the users that are legal (greater than 18 years of age)

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
