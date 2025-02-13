#!/usr/bin/env node
import { Command } from 'commander'
import {
  add,
  subtract,
  multiply,
  divide,
  sin,
  cos,
  tan,
  cosec,
  sec,
  cot,
  sqrt,
  cbrt,
  crt,
  pow,
  log,
  log10,
  round,
  mod,
  gcd,
  lcm,
  median,
  avg,
  abs,
  isPrime,
  isEven,
  isOdd,
  random,
  toRad,
  toDeg,
  primeFactors,
  factorial,
} from './fns'

const operations: Record<string, Function> = {
  add,
  subtract,
  multiply,
  divide,
  sin,
  cos,
  tan,
  cosec,
  sec,
  cot,
  sqrt,
  cbrt,
  crt,
  pow,
  log,
  log10,
  round,
  mod,
  gcd,
  lcm,
  median,
  avg,
  abs,
  isPrime,
  isEven,
  isOdd,
  random,
  toRad,
  toDeg,
  primeFactors,
  factorial,
}

const program = new Command()

program
  .version('0.9.3')
  .description('mathematiqs CLI')
  .argument('<expression>', 'Maths function to evaluate (e.g. add(1,4))')
  .action((expression) => {
    try {
      const match = expression.match(/(\w+)\(([-\d.\s,]+)\)/)
      if (match) {
        const [, func, args] = match
        const params = args.split(',').map(Number)
        if (params.some(isNaN)) {
          console.error('Invalid argument(s). Ensure all arguments are numbers.')
          return
        }
        if (operations[func]) {
          const result = operations[func](...params)
          console.log(`Result: ${result}`)
        } else {
          console.error(`Unknown function: ${func}`)
        }
      } else {
        console.error('Invalid input format. Use function syntax like add(3,4).')
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error processing the input:', error.message)
      } else {
        console.error('An unknown error occurred.')
      }
    }
  })

program.parse(process.argv)
