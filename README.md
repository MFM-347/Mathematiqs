# Mathematiqs

[![Version](https://img.shields.io/npm/v/mathematiqs.svg)](https://www.npmjs.com/package/mathematiqs)
[![Downloads](https://img.shields.io/npm/dm/mathematiqs.svg)](https://www.npmjs.com/package/mathematiqs)
[![Number of GitHub contributors](https://img.shields.io/github/contributors/MFM-347/Mathematiqs)](https://github.com/MFM-347/Mathematiqs/graphs/contributors)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/MFM-347/Mathematiqs)](https://github.com/MFM-347/Mathematiqs/)
[![Number of GitHub stars](https://img.shields.io/github/stars/MFM-347/Mathematiqs)](https://github.com/MFM-347/Mathematiqs/stargazers)
[![License MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/MFM-347/Mathematiqs/blob/main/LICENSE)

Mathematiqs is a robust TypeScript library offering a comprehensive suite of mathematical functions suitable for both browser and Node.js environments. It encompasses a wide array of operations, including basic arithmetic, trigonometry, logarithms, and more. Additionally, it features a command-line interface (CLI) for the convenient evaluation of expressions.

## What's New

- **Enhanced `random` Function:** Now supports specifying minimum and maximum values.
- **Extended Arithmetic Functions:** The `add`, `subtract`, `multiply`, and `divide` functions now accept an unlimited number of arguments for increased flexibility.
- **Newly Introduced Functions:** Added functions such as `cbrt`, `crt`, `gcd`, `lcm`, `primeFactors`, `factorial`, `mod`, `median`, `avg`, `abs`, `isPrime`, `isEven`, and `isOdd` to broaden the library's capabilities.

## Features

- **Comprehensive Mathematical Functions:**

  - **Basic Operations:** `add`, `subtract`, `multiply`, `divide`, `mod`
  - **Exponential & Root Functions:** `pow`, `sqrt`, `cbrt`, `crt`
  - **Logarithmic Functions:** `log`, `log10`
  - **Trigonometric Functions:** `sin`, `cos`, `tan`, `cosec`, `sec`, `cot`
  - **Angle Conversion:** `toRad`, `toDeg`
  - **Number Theory:** `gcd`, `primeFactors`, `lcm`, `isPrime`, `isEven`, `isOdd`, `factorial`
  - **Statistical Functions:** `median`, `avg`
  - **Rounding & Absolute Values:** `round`, `abs`
  - **Randomization:** `random`

- **Command-Line Interface (CLI):** Evaluate mathematical expressions directly from the terminal for quick computations.
- **Full TypeScript Support:** Includes type definitions to ensure seamless integration and development.
- **Lightweight and Efficient:** Designed to be fast with minimal dependencies, making it suitable for various applications.

## Installation

To install the package, use npm:

```bash
npm install mathematiqs
```

Or, if you prefer using yarn:

```bash
yarn add mathematiqs
```

## Usage

### Importing the Library

Import the desired functions into your TypeScript project as follows:

```typescript
import { add, subtract, multiply, divide } from 'mathematiqs'
```

### Example Usage

```typescript
console.log(add(1, 2)) // Output: 3
console.log(multiply(4, 5)) // Output: 20
console.log(sin(Math.PI / 2)) // Output: 1
```

### CLI Usage

After installation, you can use the Mathematiqs CLI to evaluate mathematical expressions directly from your terminal.

1. **Install Globally (Optional):**

   ```bash
   npm install -g mathematiqs
   ```

2. **Evaluate Expressions:**

   ```bash
   maths add(1, 4);    // Output: Result: 5
   maths sqrt(16);     // Output: Result: 4
   ```

### Available Operations

- **Basic Math:** `add(a, b)`, `subtract(a, b)`, `multiply(a, b)`, `divide(a, b)`
- **Trigonometry:** `sin(x)`, `cos(x)`, `tan(x)`, `cosec(x)`, `sec(x)`, `cot(x)`
- **Logarithms:** `log(x)`, `log10(x)`
- **Other Functions:** `sqrt(x)`, `pow(x, y)`, `round(x)`, `random()`, `toRad(x)`, `toDeg(x)`, `fact(x)`

## Frequently Asked Questions

**Q1: Is Mathematiqs suitable for both client-side and server-side applications?**

Yes, Mathematiqs is designed to work seamlessly in both browser and Node.js environments, making it versatile for various applications.

**Q2: Does Mathematiqs support TypeScript?**

Absolutely. Mathematiqs is built with full TypeScript support, including comprehensive type definitions to enhance the development experience.

**Q3: How can I contribute to the Mathematiqs library?**

We appreciate contributions from the community. Please check our [CONTRIBUTING.md](https://github.com/MFM-347/Mathematiqs/blob/main/CONTRIBUTING.md) file for detailed guidelines on how to contribute.

**Q4: Is there a command-line interface available for Mathematiqs?**

Yes, Mathematiqs offers a CLI that allows you to evaluate mathematical expressions directly from your terminal. This can be particularly useful for quick calculations and scripting.

## Contributing

We welcome contributions! Please refer to the [CONTRIBUTING.md](https://github.com/MFM-347/Mathematiqs/blob/main/CONTRIBUTING.md) for guidelines.

## Credits

This library is maintained by [@MFM-347](https://github.com/mfm-347).

## License

The code in this repository is licensed under the **MIT License**. View more information [here](https://github.com/MFM-347/Mathematiqs/blob/main/LICENSE).
