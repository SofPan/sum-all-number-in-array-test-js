// Sum all the numbers in the array
const sumItems = (array) => {
  if (array.length === 1) {
    return array[0];
  }

  while (array.length > 1) {
    array[0] += array[array.length - 1];
    array.pop();
  }
  return array[0];
};
module.exports = sumItems;