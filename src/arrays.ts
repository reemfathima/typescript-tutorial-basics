export const arrays = () => {
  //Typed Arrays -> each element is some consistent type of value

  const carMakers = ['ford', 'toyota', 'chevy'];
  // ts infer as array of string

  // empty array
  const shapes: string[] = [];

  // 2D array
  const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

  /*
    1) TS can do type inference when extrscting values from an array
    2) TS can prevent adding incompatible values to the array
    3) help with 'map', 'forEach', reduce functions
    4) flexible: can contain multiple different types
  */

  // #1
  // from array of strings -> infer 'car' as string
  const car = carMakers[0];
  const myCar = carMakers.pop();

  // #2
  shapes.push(100);
  // shows Error: Argument of type 'number' is not assignable to parameter of type 'string'.

  // #3
  carMakers.map((car): void => {
    // infer car as string and shows autocomplete properties and methods of string
    console.log(car.toUpperCase);
  });

  // #4
  const importantDates: (Date | string)[] = [];
  importantDates.push(new Date());
  importantDates.push('2023-10-10');

  /*
  - Typed arrays -> to represent a collection of records with some aribtrary sort order
  - similar datatype -> tuples
  */
};
