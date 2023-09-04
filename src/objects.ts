export const objects = () => {
  const profile = {
    name: 'Alex',
    age: 20,
    coords: {
      lat: 0,
      lng: 15,
    },
    // function inside object
    setAge(age: number): void {
      this.age = age;
    },
  };

  // destructuring object
  const { age }: { age: number } = profile;

  const {
    coords: { lat, lng },
  }: { coords: { lat: number; lng: number } } = profile;
};
