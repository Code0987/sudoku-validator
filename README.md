## sudoku-validator

A simple nodejs script to check for valid sudoku (in 2D array format).

### Install/Use (Test)

```
git clone https://github.com/Code0987/sudoku-validator
cd sudoku-validator

npm install

npm run test
```

### Install/Use (npm Package)

```
npm install Code0987/sudoku-validator --save
```
See `test.js` for examples.

```
const sudokuValidator = require('./sudoku-validator');

const sudoku = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

sudokuValidator.isValid(sudoku1); // true

```

### Test

```
npm run test

> sudoku-validator@0.0.1 test 
> node test.js

Passed! Valid check
Passed! Invalid check
```