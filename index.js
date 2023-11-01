// Sum all the numbers in the array
const sumItems = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      sum += array[i];
    } else {
      sum += sumItems(array[i]);
    }

  }
  return sum;
};

module.exports = sumItems;