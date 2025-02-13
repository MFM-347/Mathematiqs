export const add = (...nums: number[]) => nums.reduce((a, b) => a + b, 0)
export const subtract = (...nums: number[]) => nums.reduce((a, b) => a - b)
export const multiply = (...nums: number[]) => nums.reduce((a, b) => a * b, 1)
export const divide = (...nums: number[]) => {
  if (nums.includes(0)) throw new Error('Division by zero is not allowed')
  return nums.reduce((a, b) => a / b)
}
export const sin = (a: number) => Math.sin(a)
export const cos = (a: number) => Math.cos(a)
export const tan = (a: number) => Math.tan(a)
export const cosec = (a: number) => 1 / Math.sin(a)
export const sec = (a: number) => 1 / Math.cos(a)
export const cot = (a: number) => 1 / Math.tan(a)
export const sqrt = (a: number) => Math.sqrt(a)
export const cbrt = (a: number) => a ** (1 / 3)
export const crt = (a: number, b: number) => {
  if (a <= 0) throw new Error('Root value must be greater than zero')
  return b ** (1 / a)
}
export const pow = (a: number, b: number) => Math.pow(a, b)
export const log = (a: number) => Math.log(a)
export const log10 = (a: number) => Math.log10(a)
export const round = (a: number, b: number) => Math.round(a * 10 ** b) / 10 ** b
const gcdTwo = (a: number, b: number): number => (b === 0 ? a : gcdTwo(b, a % b))
export const gcd = (...nums: number[]) => nums.reduce(gcdTwo)
export const lcm = (...nums: number[]) => nums.reduce((a, b) => (a * b) / gcdTwo(a, b))
export const abs = (a: number) => Math.abs(a)
export const avg = (...nums: number[]) => nums.reduce((a, b) => a + b, 0) / nums.length
export const median = (...nums: number[]) => {
  nums.sort((a, b) => a - b)
  const mid = Math.floor(nums.length / 2)
  return nums.length % 2 === 0 ? (nums[mid - 1] + nums[mid]) / 2 : nums[mid]
}
export const isEven = (n: number): boolean => n % 2 === 0
export const isOdd = (n: number): boolean => n % 2 !== 0
export const isPrime = (n: number): boolean => {
  if (n < 2) return false
  if (n === 2 || n === 3) return true
  if (n % 2 === 0 || n % 3 === 0) return false
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false
  }
  return true
}
export const mod = (a: number, b: number) => a % b
export const random = (a: number, b: number) => {
  if (a >= b) throw new Error('Min must be less than Max')
  return Math.floor(Math.random() * (b - a + 1)) + a
}
export const toRad = (a: number): number => a * (Math.PI / 180)
export const toDeg = (a: number): number => a * (180 / Math.PI)
export const primeFactors = (a: number): number[] => {
  const factors: number[] = []
  while (a % 2 === 0) {
    factors.push(2)
    a /= 2
  }
  let factor = 3
  while (factor * factor <= a) {
    while (a % factor === 0) {
      factors.push(factor)
      a /= factor
    }
    factor += 2
  }
  if (a > 2) {
    factors.push(a)
  }
  return factors
}
export const factorial = (n: number): number => {
  if (n < 0) throw new Error('Factorial is not defined for negative numbers')
  return n === 0 ? 1 : n * factorial(n - 1)
}
