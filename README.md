<p align="center">
  <a href="https://www.npmjs.com/package/ketargs" target="_blank" rel="noopener noreferrer">
    <img width="180" src="logo.png" alt="ketargs logo" />
  </a>
  <a href="https://www.npmjs.com/package/@toolx/core"><img src="https://img.shields.io/npm/v/ketargs" alt="npm package"></a>
  <img alt="NPM" src="https://img.shields.io/npm/l/ketargs">
</p>
<br/>

# ketargs

## Introduction
`ketargs` is a TypeScript-based utility designed for converting JavaScript objects into command-line arguments. This library serves as a counterpart to `mustargs`, focusing on generating CLI-friendly argument strings from structured data. `ketargs` is ideal for scenarios where command-line arguments need to be dynamically generated from JavaScript objects.

## Features
- **TypeScript Support**: Built with TypeScript, offering type safety and integration with TypeScript-based projects.
- **Flexible Input Handling**: Capable of handling nested objects, arrays, and primitive data types.
- **CLI-Style Argument Generation**: Converts object properties into CLI-style flags and parameters.

## Installation
`ketargs` is available as a package and can be easily integrated into your TypeScript or JavaScript project. To install `ketargs`, use the following command:

```bash
npm install ketargs
```

## Usage
Import `ketargs` into your project and pass a JavaScript object to convert it into an array of CLI arguments.

```typescript
import ketargs from 'ketargs';

const options = {
    verbose: true,
    output: 'dist',
    config: {
        width: 1920,
        height: 1080
    },
    format: ['jpeg', 'png']
};

const cliArgs = ketargs(options);
console.log(cliArgs);
```

## Functionality
The `ketargs` function takes an object and recursively processes each key-value pair. Arrays are handled by placing each element under the same flag, while nested objects are flattened using dot notation.

- Primitive values (string, number, boolean) are converted directly.
- Arrays result in multiple values under the same key.
- Nested objects are flattened with keys combined using dot notation.

## Example
```typescript
const options = {
    optimize: true,
    config: {
        depth: 3,
        algorithms: ['gzip', 'brotli']
    },
    targets: ['src', 'lib']
};

const args = ketargs(options);
// ['--optimize', 'true', '--config.depth', '3', '--config.algorithms', 'gzip', 'brotli', '--targets', 'src', 'lib']
```

## Important: Setting `type` to `module` in `package.json`

When using `ketargs` in your project, it's crucial to ensure that your Node.js environment recognizes ESModule syntax. For this, you need to add the following line to your project's `package.json`:

```json
{
    "type": "module",
}
```

## Contributing
Contributions to `ketargs` are welcome. This library is part of the [toolx](https://github.com/williammanco/toolx) library.

## License
`ketargs` is licensed under the MIT License.

