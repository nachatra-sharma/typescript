function sendData<T>(arr: T[]): T {
  return arr[0];
}

const arr = ["harkirat", "singh"];

const value1 = sendData<string>(arr);
console.log(value1.toUpperCase());
