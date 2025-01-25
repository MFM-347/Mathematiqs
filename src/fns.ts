export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;
export const multiply = (a: number, b: number) => a * b;
export const divide = (a: number, b: number) => (b !== 0 ? a / b : 'Cannot divide by zero');
export const sin = (a: number) => Math.sin(a);
export const cos = (a: number) => Math.cos(a);
export const tan = (a: number) => Math.tan(a);
export const cosec = (a: number) => 1 / Math.sin(a);
export const sec = (a: number) => 1 / Math.cos(a);
export const cot = (a: number) => 1 / Math.tan(a);
export const sqrt = (a: number) => Math.sqrt(a);
export const pow = (a: number, b: number) => Math.pow(a, b);
export const log = (a: number) => Math.log(a);
export const log10 = (a: number) => Math.log10(a);
export const round = (a: number) => Math.round(a);
export const random = () => Math.random();
export const toRad = (a: number): number => a * (Math.PI / 180);
export const toDeg = (a: number): number => a * (180 / Math.PI);
export const fact = (a: number): number[] => {
  const factors: number[] = [];
  while (a % 2 === 0) {
    factors.push(2);
    a /= 2;
  }
  let factor = 3;
  while (factor * factor <= a) {
    while (a % factor === 0) {
      factors.push(factor);
      a /= factor;
    }
    factor += 2;
  }
  if (a > 2) {
    factors.push(a);
  }
  return factors;
};
