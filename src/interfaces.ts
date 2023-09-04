export const interfaces = () => {
  /* 
  - Intefaces + Classes = strong code reuse in TS
  - Interfaces: of an object
    -> create new type - custom type
    ->describe property names
    -> value types
  */

  const oldCivic = {
    name: 'Civic',
    year: 2000,
    broken: true,
  };

  const printVechicle = (vehicle: {
    name: string;
    year: number;
    broken: boolean;
  }): void => {
    console.log(`Name: ${vehicle.name}`);
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken?: ${vehicle.broken}`);
  };

  /*
  long type annotation -> might need to be repeated for other functions 
  -> define an interface
  */

  interface Vehicle {
    name: string;
    year: number;
    broken: boolean;
  }

  // same function can be rewritten as
  const logVehicle = (vehicle: Vehicle): void => {
    console.log(`Name: ${vehicle.name}`); // show auto complete
    console.log(`Year: ${vehicle.year}`);
    console.log(`Broken?: ${vehicle.broken}`);
  };

  const newCivic = {
    name: 'Civic',
    year: 2020,
    broken: 1,
  };

  const myCivic = {
    name: 'Civic',
    year: 2023,
    isBroken: 1,
  };

  logVehicle(oldCivic); // No Error
  /*
  logVehicle(newCivic); // Types of 'broken' are incompatible.
  logVehicle(myCivic); // Property 'broken' is missing
  */

  interface Reportable {
    summary(): string;
  }

  const getReport = (item: Reportable): void => {
    console.log(item.summary());
  };

  const whiteHonda = {
    name: 'Honda',
    year: 2018,
    broken: false,
    summary() {
      return `${this.name} from ${this.year} and is ${
        this.broken ? '' : 'not'
      } broken`;
    },
  };

  getReport(whiteHonda);
  // only check if it has properties of 'Reportable'. Addition properties doesn't matter
};
