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
  nthRoot,
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
  nthRoot,
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
  .version('1.0.0')
  .description('Mathematiqs CLI')
  .argument('<expression>', 'Math function to evaluate (e.g. add(1,4))')
  .action((expression) => {
    try {
      const match = expression.match(/(\w+)\(([-\d.\s,]+)\)/)
      if (!match) {
        console.error('Invalid input format. Use function syntax like add(3,4).')
        return
      }

      const [, func, args] = match
      const params = args.split(',').map(Number)

      if (params.some(isNaN)) {
        console.error('Invalid argument(s). Ensure all arguments are numbers.')
        return
      }

      if (!(func in operations)) {
        console.error(`Unknown function: ${func}`)
        return
      }

      const result = operations[func](...params)
      console.log(`Result: ${result}`)
    } catch (error: unknown) {
      console.error(
        error instanceof Error
          ? `Error processing the input: ${error.message}`
          : 'An unknown error occurred.',
      )
    }
  })

program.parse(process.argv)
