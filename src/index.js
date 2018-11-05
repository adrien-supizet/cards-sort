const nativeJs = require('./nativeJsSort.js');
const bubble = require('./bubbleSort.js');

const SIZE = 10;
const MAX = 100;
const sorting = [nativeJs, bubble];
let arrayToSort = Array(SIZE)
  .fill()
  .map(() => Math.round(Math.random() * MAX));

console.log('Initial array: ' + arrayToSort);
for (let i in sorting) {
  console.log(sorting[i].name + ': ' + sorting[i].sort(arrayToSort));
}
