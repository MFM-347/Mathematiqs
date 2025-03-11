// **Utility Functions**
const isValidNumber = (...nums: number[]) => {
  if (!nums.every(Number.isFinite)) throw new Error('Invalid input: All arguments must be numbers.')
}

const isNonZeroDivisor = (num: number) => {
  if (num === 0) throw new Error('Division by zero is not allowed.')
}

// **Basic Operations**
export const add = (...nums: number[]) => (isValidNumber(...nums), nums.reduce((a, b) => a + b, 0))

export const subtract = (...nums: number[]) => (
  isValidNumber(...nums), nums.reduce((a, b) => a - b)
)

export const multiply = (...nums: number[]) => (
  isValidNumber(...nums), nums.reduce((a, b) => a * b, 1)
)

export const divide = (...nums: number[]) => {
  isValidNumber(...nums)
  nums.slice(1).forEach(isNonZeroDivisor)
  return nums.reduce((a, b) => a / b)
}

export const mod = (a: number, b: number) => (isValidNumber(a, b), isNonZeroDivisor(b), a % b)

// **Exponentiation & Roots**
export const pow = (base: number, exp: number) => (isValidNumber(base, exp), Math.pow(base, exp))

export const sqrt = (num: number) => {
  isValidNumber(num)
  if (num < 0) throw new Error('Invalid input: sqrt is not defined for negative numbers.')
  return Math.sqrt(num)
}

export const cbrt = (num: number) => (isValidNumber(num), Math.cbrt(num))

export const nthRoot = (degree: number, num: number) => {
  isValidNumber(degree, num)
  if (degree <= 0) throw new Error('Root value must be greater than zero.')
  return Math.pow(num, 1 / degree)
}

// **Logarithmic Functions**
export const log = (num: number) => {
  isValidNumber(num)
  if (num <= 0) throw new Error('Invalid input: log is not defined for zero or negative numbers.')
  return Math.log(num)
}

export const log10 = (num: number) => {
  isValidNumber(num)
  if (num <= 0) throw new Error('Invalid input: log10 is not defined for zero or negative numbers.')
  return Math.log10(num)
}

// **Trigonometric Functions (Input should be in Radians)**
export const sin = (rad: number) => (isValidNumber(rad), Math.sin(rad))

export const cos = (rad: number) => (isValidNumber(rad), Math.cos(rad))

export const tan = (rad: number) => {
  isValidNumber(rad)
  if (Math.cos(rad) === 0) throw new Error('Invalid input: tan is undefined at 90° + nπ.')
  return Math.tan(rad)
}

export const cosec = (rad: number) => {
  isValidNumber(rad)
  if (Math.sin(rad) === 0) throw new Error('Invalid input: cosec is undefined for multiples of π.')
  return 1 / Math.sin(rad)
}

export const sec = (rad: number) => {
  isValidNumber(rad)
  if (Math.cos(rad) === 0) throw new Error('Invalid input: sec is undefined for multiples of π/2.')
  return 1 / Math.cos(rad)
}

export const cot = (rad: number) => {
  isValidNumber(rad)
  if (Math.sin(rad) === 0) throw new Error('Invalid input: cot is undefined for multiples of π.')
  return 1 / Math.tan(rad)
}

// **Angle Conversion**
export const toRad = (deg: number) => (isValidNumber(deg), (deg * Math.PI) / 180)

export const toDeg = (rad: number) => (isValidNumber(rad), (rad * 180) / Math.PI)

// **Number Theory**
const gcdTwo = (a: number, b: number): number => (b === 0 ? a : gcdTwo(b, a % b))

export const gcd = (...nums: number[]) => (isValidNumber(...nums), nums.reduce(gcdTwo))

export const lcm = (...nums: number[]) => (
  isValidNumber(...nums), nums.reduce((a, b) => (a * b) / gcdTwo(a, b))
)

export const isPrime = (num: number) => {
  isValidNumber(num)
  if (num < 2) return false
  for (let i = 2, sqrtNum = Math.sqrt(num); i <= sqrtNum; i++) {
    if (num % i === 0) return false
  }
  return true
}

export const isEven = (num: number) => (isValidNumber(num), num % 2 === 0)

export const isOdd = (num: number) => (isValidNumber(num), num % 2 !== 0)

export const factorial = (num: number): number => {
  isValidNumber(num)
  if (num < 0) throw new Error('Invalid input: factorial is not defined for negative numbers.')
  return num === 0 ? 1 : Array.from({ length: num }, (_, i) => i + 1).reduce((a, b) => a * b, 1)
}

export const primeFactors = (num: number) => {
  isValidNumber(num)
  let factors: number[] = []
  let divisor = 2
  while (num >= 2) {
    if (num % divisor === 0) {
      factors.push(divisor)
      num /= divisor
    } else {
      divisor++
    }
  }
  return factors
}

// **Statistical Functions**
export const avg = (...nums: number[]) => (
  isValidNumber(...nums), nums.reduce((a, b) => a + b, 0) / nums.length
)

export const median = (...nums: number[]) => {
  isValidNumber(...nums)
  nums.sort((a, b) => a - b)
  const mid = Math.floor(nums.length / 2)
  return nums.length % 2 === 0 ? (nums[mid - 1] + nums[mid]) / 2 : nums[mid]
}

// **Rounding & Absolute Values**
export const round = (num: number, precision: number) => (
  isValidNumber(num, precision), Math.round(num * 10 ** precision) / 10 ** precision
)

export const abs = (num: number) => (isValidNumber(num), Math.abs(num))

// **Randomization**
export const random = (min: number, max: number) => {
  isValidNumber(min, max)
  if (min > max) throw new Error('Invalid range: min must be less than max.')
  return Math.random() * (max - min) + min
}
