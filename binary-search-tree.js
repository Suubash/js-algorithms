const recursionFunction = (array, searchElement, startIndex, endIndex) => {
  if (startIndex > endIndex) return false;

  let middleIndex = Math.floor((startIndex + endIndex) / 2);

  if (array[middleIndex] === searchElement) return true;

  if (array[middleIndex] > searchElement) {
    return recursionFunction(array, searchElement, startIndex, middleIndex - 1);
  } else {
    return recursionFunction(array, searchElement, middleIndex + 1, endIndex);
  }
};

const elementExist = (array, searchElement) => {
  const sorted_array = array.sort((a, b) => a - b);
  return recursionFunction(sorted_array, searchElement, 0, array.length - 1);
};

const found = elementExist([12, 9000, -50000, 8.12], 8.12);

console.log(found ? "Element found!!" : "Element cannot be found!!");
