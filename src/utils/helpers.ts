export const generateRandomNumber = (min: number = 0, max: number = 100) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
