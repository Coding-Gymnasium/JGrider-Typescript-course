const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// const pepsi = ['brown', true, 40]; // const pepsi: (string | number | boolean)[]
// const pepsi: [string, boolean, number] = ['brown', true, 40]; // the array of types makes it a tuple.
// pepsi[0] = 40; // Type 'number' is not assignable to type 'string'.

type Drink = [string, boolean, number]; // create a tuple.

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carSpecs: [number, number] = [400, 3354]; // tuple example. It's hard to know what each element is when seen out of context.

const carStats = {
  // easy to see what it's going on at a glance. Better option to model a record this way.
  horsePower: 400,
  weight: 3354,
};
