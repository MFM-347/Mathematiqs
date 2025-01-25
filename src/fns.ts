export const add = (num1: number, num2: number) => num1 + num2;
export const subtract = (num1: number, num2: number) => num1 - num2;
export const multiply = (num1: number, num2: number) => num1 * num2;
export const divide = (num1: number, num2: number) =>
  num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
export const sin = (num1: number) => Math.sin(num1);
export const cos = (num1: number) => Math.cos(num1);
export const tan = (num1: number) => Math.tan(num1);
export const cosec = (num1: number) => 1 / Math.sin(num1);
export const sec = (num1: number) => 1 / Math.cos(num1);
export const cot = (num1: number) => 1 / Math.tan(num1);
export const sqrt = (num1: number) => Math.sqrt(num1);
export const pow = (num1: number, num2: number) => Math.pow(num1, num2);
export const log = (num1: number) => Math.log(num1);
export const log10 = (num1: number) => Math.log10(num1);
export const round = (num1: number) => Math.round(num1);
export const random = () => Math.random();
export const toRad = (num1: number): number => num1 * (Math.PI / 180);
export const toDeg = (num1: number): number => num1 * (180 / Math.PI);
export const fact = (num1: number): number[] => {
  const factors: number[] = [];
  while (num1 % 2 === 0) {
    factors.push(2);
    num1 /= 2;
  }
  let factor = 3;
  while (factor * factor <= num1) {
    while (num1 % factor === 0) {
      factors.push(factor);
      num1 /= factor;
    }
    factor += 2;
  }
  if (num1 > 2) {
    factors.push(num1);
  }
  return factors;
};
