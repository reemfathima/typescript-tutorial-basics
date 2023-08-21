/* 
- type: shortcut to refer to different methods and properties that value has
- interface: a user-defined type

- examples of types:
  1. string: 'hi', "", 'Today is good!'
  2. number: .00243, -28, 445000
  3. boolean: true, false
  4. Date: new Date()
  5. User: {id:1, name: "John", age: 20}

- categories of types:
  1. primitive types: number, string, boolean, void, undefined, symbol, null
  2. object types: functions, class, arrays, objects

- help to analyze errors, help developers to understand values in codebase

*/
import axios from 'axios';

export const types = () => {
  interface User {
    id: number;
    name: string;
  }

  const url = 'https://jsonplaceholder.typicode.com/users/1';

  axios.get(url).then((response) => {
    const user = response.data as User;

    const age = user.age;
    //throws error - Property 'age' does not exist on type 'User'

    console.log(age);
  });
};
