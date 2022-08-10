// Write a JavaScript program that will return true if the specified value is null, false otherwise.

const isNullValue = (value) => {
  if (!value) return true;
  return false;
};

const nullValue = null;
console.log(isNullValue(nullValue));
