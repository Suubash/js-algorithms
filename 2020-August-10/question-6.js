// Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.

// const input = [ ['a', 'b', 'c'], ['c', 'd', 'f'], ['d', 'f', 'g'], ];
// { a: 1, b: 1, c: 2, d: 2, f: 2, g: 1, }

const sameElementCounter = () => {
  const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
  ];
  let result = {};

  try {
    const length = input.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] in result) {
          result[input[i][j]] = result[input[i][j]] + 1;
        } else {
          result[input[i][j]] = 1;
        }
      }
    }
    console.log(result);
  } catch (error) {
    console.log("Please provide 2D array");
  }
};

sameElementCounter();
