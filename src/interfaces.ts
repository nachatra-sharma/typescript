interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function displayUser(user: User) {
  console.log(user.firstName);
  console.log(user.lastName);
  console.log(user.age);
}

function isAdult(user: User) {
  if (user.age > 18) return true;
  else return false;
}

const user = {
  firstName: "Rishi",
  lastName: "Sunak",
  age: 24,
};

displayUser(user);
console.log("user adult:", isAdult(user));
