/*
interference: ts figure out what type a variable refer to
*/

export const inference = () => {
  const color = 'red';
  /*
  var_declaration = var_initialization
  
  if declaration and initialization on same line,
  TS figure out the type.
  */

  let speed; // type is any
  speed = 5;
};
