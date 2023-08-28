/*
annotations: code added to tell ts:
  - what type of argument a function will receive
  - what type of value it will return 

interference: ts figure out what type of value a function returns
*/

export const functions = () => {
  const add = (a: number, b: number): number => a + b;

  /* since we have given type for inputs as number,
  ts can infer the type of output as number, (but always better to use type)
  so this function can be written without output type as

  const add = (a: number, b: number) => a + b;
  */

  // anonymous function
  const multiply = function (a: number, b: number): number {
    return a * b;
  };

  // void type -> return nothingl or undefined
  const logger = (message: string): void => {
    if (message) {
      console.log(message);
    }
    return undefined;
  };

  // never type -> always return nothing
  const throwError = (message: string): never => {
    throw new Error(message);
  };

  // Destructuring with annotation
  const todaysWeather = {
    date: new Date(),
    weather: 'sunny',
  };

  const logWeather = (forecast: { date: Date; weather: string }): void => {
    console.log(`It's ${forecast.date}\n It's a ${forecast.weather} day`);
  };
  logWeather(todaysWeather);

  // To use the variables as destructed the function can be defined as follows:
  const logWeatherData = ({
    date,
    weather,
  }: {
    date: Date;
    weather: string;
  }): void => {
    console.log(`It's ${date}\n It's a ${weather} day`);
  };
};
