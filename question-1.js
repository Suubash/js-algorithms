// Q: If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

// input: [ 1, -4, 12, 0, -3, 29, -150];
// output: 42

const addPositiveValuesFromArray = (array) => {
  const new_array = array.filter((element) => element > 0);
  return new_array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
};

const sumFinder = addPositiveValuesFromArray([1, -4, 12, 0, -3, 29, -150]);
console.log(sumFinder);
