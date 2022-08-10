// Write a JavaScript program to check if a given string is upper case or not

const upperCaseChecker = (string) => {
  const isAllUppercase = /^[A-Z]*$/.test(string);
  const isSomeUppercase = /[A-Z]/.test(string);
  console.log({ isAllUppercase, isSomeUppercase });
};

upperCaseChecker("DRAKE");
