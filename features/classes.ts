class Vehicle {
  protected honk(): void {
    console.log('beep');
  }
}

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
