exports.name = 'Quick Sort';
exports.sort = array => {
  const length = array.length;
  const pivot = 0;
  return quickSort(array);
};

const quickSort = (array, left, right) => {
  const length = array.length;
  let pivot, partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
};

const partition = (array, pivot, left, right) => {
  const pivotValue = array[pivot],
    partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
};

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};
