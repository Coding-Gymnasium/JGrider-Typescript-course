const add = (a: number, b: number): number => {
  return a + b;
};

const substract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  // use 'never' when there isn't a return in the function.
  throw new Error(message);
};

const throwError1 = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
};
