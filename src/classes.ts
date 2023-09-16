export const classes = () => {
  /*
  blueprint to create a object with some fields (values)
  and methods (functions) to represent a 'thing'

  - Inheritence
  - Override method in child class

  - modifiers: restrict access to functions and variables
    -> public (default): methods called anywhere anytime
    -> private: only called by other methods in the same class
    -> protected: called by other methods in same class or child classes

  - constructor

  */

  class Vehicle {
    color: string;

    // constructor executed when creating a new instance of class
    constructor(color: string) {
      this.color = color;
    }

    private drive(): void {
      console.log('chugga chugga');
    }

    honk(): void {
      // public by default
      console.log('beep');
    }
  }

  // Inheritence
  class Car extends Vehicle {
    constructor(public model: string, color: string) {
      // public field - no need to define
      super(color); // reference to parent class constructor
    }
    /*
    override method - error -> drive is private
    drive(): void {
      console.log('vroom');
    }

    override method - cannot change modifier
    protected honk(): void {
      console.log('pom');
    }
    */
  }

  // const vechicle = new Vehicle();  -> color not provided
  const vehicle = new Vehicle('orange');
  console.log(vehicle.color);
  // vehicle.drive(); -> cannot call private method
  vehicle.honk();

  const car = new Car('benz', 'red');
  //car.honk(); -> cannot call protected method
};
