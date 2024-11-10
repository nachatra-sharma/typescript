interface Person {
  name: string;
  age: number;
  greet(phase: string): void;
}

class Employee implements Person {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phase: string) {
    console.log("hello there ", phase);
  }
}
