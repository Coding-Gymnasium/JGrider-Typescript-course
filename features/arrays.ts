const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()]; // TS assigned 'dates: Date[]' using inference.

const carsByMake = [['f150'], ['corolla'], ['camaro']]; // carsByMake: string[][]
// const carMakers: string[][] = []; // if the array was initialized empty.

// Help with inference when extracting values.
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100); // Argument of type 'number' is not assignable to parameter of type 'string'

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});
