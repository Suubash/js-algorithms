// Write a JavaScript program to check if the provided argument is a valid JSON.

const validJSONChecker = (arg) => {
  try {
    const parsedJson = JSON.parse(arg);
    if (typeof parsedJson) return "Valid JSON!!";
    return "Invalid JSON!!";
  } catch (error) {
    return "Invalid JSON!!";
  }
};
const isValid = validJSONChecker('{ "name": "subash" }');
console.log(isValid);
