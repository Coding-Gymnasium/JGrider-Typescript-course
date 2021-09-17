let apples: number = 5;
/** this annotation it's telling TS we are assigning a value 'number' to apples. If TS see something else will throw an arrow message.
 */
// apples = 'red'; // this example throws error: 'Type 'string' is not assignable to type 'number'.'

let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in Objects

let now: Date = new Date();

// Array

let colors: string[] = ['red', 'green', 'blue']; // `string[]` tells TS we are assigning an array that will contain only strings.

let nyNumbers: number[] = [1, 2, 3];
let truth: boolean[] = [true, false, true];

// Classes

class Car {}

let car: Car = new Car(); // assigning Car as type.

// Object Literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
