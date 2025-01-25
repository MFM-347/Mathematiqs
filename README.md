# Mathematiqs

[![Version](https://img.shields.io/npm/v/Mathematiqs.svg)](https://www.npmjs.com/package/Mathematiqs)
[![Downloads](https://img.shields.io/npm/dm/Mathematiqs)](https://www.npmjs.com/package/Mathematiqs)
[![Number of GitHub contributors](https://img.shields.io/github/contributors/MFM-347/Mathematiqs)](https://github.com/MFM-347/Mathematiqs/graphs/contributors)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/MFM-347/Mathematiqs)](https://github.com/MFM-347/Mathematiqs/)
[![Number of GitHub stars](https://img.shields.io/github/stars/MFM-347/Mathematiqs)](https://github.com/MFM-347/Mathematiqs/stargazers)
[![License MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/MFM-347/Mathematiqs/blob/main/LICENSE)

Mathematiqs is a simple yet powerful Maths library for TypeScript, designed to provide essential mathematical functions for both browser and Node.js environments. This library includes a variety of mathematical functions like addition, subtraction, trigonometric functions, logarithms, and more, as well as a command-line interface (CLI) for easy evaluation of expressions.

## Features

- A collection of essential mathematical functions:
  - Basic operations: `add`, `subtract`, `multiply`, `divide`
  - Trigonometric functions: `sin`, `cos`, `tan`, `cosec`, `sec`, `cot`
  - Other functions: `sqrt`, `pow`, `log`, `log10`, `round`, `random`, `toRad`, `toDeg`, `fact`
- CLI support to evaluate mathematical expressions directly from the command line.
- Full TypeScript support with type definitions for seamless development.
- Lightweight and fast with minimal dependencies.

## Installation

To install the package, you can use npm:

```bash
npm install mathematiqs
```

Or if you prefer using yarn:

```bash
yarn add mathematiqs
```

## Usage

### Importing the Library

You can import the desired functions into your TypeScript project as follows:

```typescript
import { add, subtract, multiply, divide } from 'mathematiqs';
```

### Example Usage:

```typescript
console.log(add(1, 2)); // Output: 3
console.log(multiply(4, 5)); // Output: 20
console.log(sin(Math.PI / 2)); // Output: 1
```

### CLI Usage

Once installed, you can use the Maths CLI to evaluate mathematical expressions directly from your terminal.

1. Install globally (optional):

```bash
npm install -g mathematiqs
```

2. Use the CLI to evaluate an expression:

```bash
maths add(1,4)    # Output: Result: 5
maths sqrt(16)    # Output: Result: 4
```

### Available Operations

- **Basic Math**: `add(a, b)`, `subtract(a, b)`, `multiply(a, b)`, `divide(a, b)`
- **Trigonometry**: `sin(x)`, `cos(x)`, `tan(x)`, `cosec(x)`, `sec(x)`, `cot(x)`
- **Logarithms**: `log(x)`, `log10(x)`
- **Other Functions**: `sqrt(x)`, `pow(x, y)`, `round(x)`, `random()`, `toRad(x)`, `toDeg(x)`, `fact(x)`

## Contributing

We welcome contributions! Please check the [CONTRIBUTING.md](https://github.com/MFM-347/Mathematiqs/blob/main/CONTRIBUTING.md) for guidelines.

## Credits

This library is maintained by [@MFM-347](https://github.com/mfm-347).

## License

The code in this repository is licensed under the **MIT License**. View more info [here](https://github.com/MFM-347/Mathematiqs/blob/main/LICENSE). 📜✅🖋️
