// If the given input is a number, you should return the factorial of that number. The factorial of a natural number n is the product of the positive integers less than or equal to n. So, 2! = 2, 3! = 6, 4! = 24 and so on.

// Input: 6
// Output: 720

const recursionFunction = (number) => {
  if (number === 0) return 1;

  return number * recursionFunction(number - 1);
};

const factorialFinder = (number) => {
  try {
    const factorial = recursionFunction(number);
    console.log(factorial);
  } catch (error) {
    console.log("enter positive integer value");
  }
};

factorialFinder(6);
