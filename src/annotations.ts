/*
annotations: code added to tell ts what type a variable refer to
*/

export const annotations = () => {
  let apples: number = 5;

  /*
  apples = 'abc';
  throws Error: Type 'string' is not assignable to type 'number'
  */

  let speed: string = 'fast';
  let hasName: boolean = true;

  let nothingMuch: null = null;
  let nothing: undefined = undefined;

  //built in objects
  let now: Date = new Date();

  // Array
  let colors: string[] = ['red', 'green', 'blue']; // string[] -> indicate array of strings
  let myNumbers: number[] = [1, 2, 3];
  let truths: boolean[] = [true, true, false];

  // Classes
  class Car {}
  let car: Car = new Car();

  // Object literal
  let point: { x: number; y: number } = {
    // types separated by semicolon(;)
    x: 10,
    y: 20,
  };

  // Function
  const logNumber: (i: number) => void = (i: number) => {
    // function type:- (arg: type) => return_type (if return nothing, use 'void')
    console.log(i);
  };
};
