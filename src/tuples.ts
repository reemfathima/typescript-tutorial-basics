export const tuples = () => {
  /*
  - Typed arrays -> to represent a collection of records with some aribtrary sort order
  - similar datatype -> tuples
  - each element represents some property of a record
  */

  // object representing a 'drink'
  const drink = { color: 'brown', carbonated: true, sugar: 40 };

  // array representing a 'drink'
  const pepsi = ['brown', true, 40]; // -> lost property labels
  // infered type -> (string|boolean|number)[]
  pepsi[0] = 40; // doesnot show error

  // tuple
  const cola: [string, boolean, number] = ['brown', true, 40];
  // type of each position
  cola[0] = 40;
  // shows Error: Type 'number' is not assignable to type 'string'.

  // To define a tuple type -> type alias
  type Drink = [string, boolean, number];
  const sprite: Drink = ['clear', true, 40];
  const tea: Drink = ['brown', false, 0];

  const carSpecs: [number, number] = [400, 3354];
  const carStats = {
    horsepower: 400,
    weight: 3354,
  };
  // object is better for modeling a record than a tuple
};
