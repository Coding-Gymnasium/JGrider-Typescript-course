class Vehicle {
  drive(): void {
    console.log('chugga chugga');
  }

  honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  honk(): void {
    console.log('vroom');
  }
}

const car = new Car();
car.honk();
car.drive();
