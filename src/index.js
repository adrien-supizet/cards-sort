const nativeJs = require('./nativeJsSort.js');
const bubble = require('./bubbleSort.js');
const quick = require('./quickSort.js');

const SIZE = 50000;
const MAX = 100;
const sorting = [nativeJs, bubble, quick];
let arrayToSort = Array(SIZE)
  .fill()
  .map(() => Math.round(Math.random() * MAX));

const sortArray = sorting => {
  let date = Date.now();
  console.log(sorting.name);
  sorting.sort(arrayToSort);
  console.log((Date.now() - date) / 1000 + 's');
};

const printSorting = async () => {
  console.log('Initial array: ');
  for (let i in sorting) {
    await sortArray(sorting[i]);
  }
};

printSorting();
