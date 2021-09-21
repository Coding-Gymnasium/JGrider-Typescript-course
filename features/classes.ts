class Vehicle {
  // color: string = 'red';
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('beep');
  }
}
const vehicle = new Vehicle('orange');
console.log(vehicle.color);

/*
class Car extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
// car.honk(); // 'honk()' can't be access outside the class Vehicle, except by it's children classes. 'startDrivingProcess' is a child class so it can use it.
car.startDrivingProcess();
*/
