const bubbleSort = (array) => {
  array.forEach(() => {
    array.filter((_, index, array) => {
      if (array[index] > array[index + 1]) {
        let temp = array[index];
        array[index] = array[index + 1];
        array[index + 1] = temp;
      }
    });
  });

  return array;
};

const sorted_array = bubbleSort([5000, 50000, -99999999999, 0.001]);
console.log(sorted_array);
