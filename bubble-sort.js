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

const sorted_array = bubbleSort([10, 8, 0, -2, 1, 9]);
console.log(sorted_array);
