exports.name = 'Bubble Sort';
exports.sort = array => {
  const length = array.length;
  for (let i = length - 1; i > 0; i--) {
    for (let j = 1; j < i; j++) {
      if (array[j - 1] > array[j]) {
        const temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};
