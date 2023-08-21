export const typesExamples = () => {
  const today = new Date();
  // on hovering can see today: Date -- type

  today.getMonth();
  // adding dot(.) after today list all available properties and methods of type Date

  today.abcd;
  // throws an Error: Property 'abcd' does not exist on type 'Date'.

  // examples of object and class
  const person = {
    age: 20,
  };

  class Color {}
  const red = new Color();
};
