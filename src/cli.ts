#!/usr/bin/env node
import { Command } from 'commander';
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
  pow,
  log,
  log10,
  round,
  random,
  toRad,
  toDeg,
  fact,
} from './fns';

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
  pow,
  log,
  log10,
  round,
  random,
  toRad,
  toDeg,
  fact,
};

const program = new Command();

program
  .version('0.9.2')
  .description('mathematiqs CLI')
  .argument('<expression>', 'Maths function to evaluate (e.g. add(1,4))')
  .action((expression) => {
    try {
      const match = expression.match(/(\w+)\(([-\d.,\s]+)\)/);
      if (match) {
        const [, func, args] = match;
        const params = args.split(',').map(Number);
        if (operations[func]) {
          const result = operations[func](...params);
          console.log(`Result: ${result}`);
        } else {
          console.error(`Unknown function: ${func}`);
        }
      } else {
        console.error('Invalid input format. Use function syntax like add(3,4).');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error processing the input:', error.message);
      } else {
        console.error('An unknown error occurred.');
      }
    }
  });

program.parse(process.argv);
