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

  /*
  when to use annotations:
  1) Function that returns the 'any' type
  2) When we declare a variable on one line and initialize it later
  */

  // #1
  const json = '{"x":10, "y":20}';
  const coordinates = JSON.parse(json); //hover on corrdinates, show type 'any'

  /*
  output of the JSON.parse() depend on the input 
  So, TS cannot predict type of output. Hence showing 'any'

  This can be fixed by adding the type for the output variable
  */

  const position: { x: number; y: number } = JSON.parse(json);
  // on hover, can see type of the var position

  // #2
  let words = ['red', 'green', 'blue'];
  let foundWord;

  foundWord = words.find((word) => word === 'green');
  /* 
  To fix this add a type or initialize with a default value
  let foundWord: boolean or
  let foundWord = false 
  */
};
