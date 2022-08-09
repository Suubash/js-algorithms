// Calculate the mean and median values of the number elements from the input array.

// Input:  [12, 46, 32, 64];
// Output: { mean: 38.5, median: 32 }

const findMeanAndMedian = (array) => {
  try {
    const sortedArray = array.sort((a, b) => a - b);

    const arrayLength = sortedArray.length;

    const sum = sortedArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
    const mean = sum / arrayLength;

    const middleIndex = Math.floor((arrayLength - 1) / 2);
    const median = sortedArray[middleIndex];

    console.log({ mean, median });
  } catch (error) {
    console.log(error.message);
  }
};

findMeanAndMedian([12, 46, 32, 64]);
