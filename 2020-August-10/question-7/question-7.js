const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const person = { name: "Costas", address: { street: "Lalaland 12" } };

// Exercise 1: print the name of each company using forEach
const printEachCompany = (comapnies) => {
  comapnies.forEach((company) => {
    console.log(company.name);
  });
};
console.log("-----------Exercise 1----------");
printEachCompany(companies);

// Exercise 2: print the name of each company that started after 1987
const companyStartedAfter1987 = (companies) => {
  companies.forEach((company) => {
    if (company.start > 1987) console.log(company.name);
  });
};

console.log("----------Exercise 2-----------");
companyStartedAfter1987(companies);

// Exercise 3: get only the companies that have category Retail, increment their start by 1 and append in the DOM a div that has the name, the category, the start and the end in paragraphs elements
// TODO:

// Exercise 4:  sort the companies based on their end date in asceding order
const sortCompaniesByDesc = (companies) => {
  companies.sort((a, b) => a.end - b.end);
  console.log(companies);
};

console.log("----------Exercise 4-----------");
sortCompaniesByDesc(companies);

// Exercise 5: sort the ages array in desceding order
const sortAges = (ages) => {
  ages.sort((a, b) => b - a);
  console.log({ ages });
};

console.log("----------Exercise 5-----------");
sortAges(ages);

// Exercise 6: print the sum if you add all the ages using reduce
const sumOfAges = (agesArray) => {
  const sum = agesArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  console.log("-----------Exercise 6----------");
  console.log(sum);
};

sumOfAges(ages);

// Exercise 7: make an new object that has the properties of name and category same as the companies[0] and a method print that prints out the name, use object destructuring and ES6 JS

const newObjectCreator = (companies) => {
  const { name, category } = companies[0];
  const newObject = { name, category };

  const printName = (newObject) => {
    console.log(newObject.name);
  };

  console.log("----------Exercise 7----------");
  printName(newObject);
};
newObjectCreator(companies);

// Exercise 8: create a funcion that takes an unknown number of arguments that are numbers and return their sum;
const sumFinder = (...args) => {
  try {
    const arrayNumber = [...args];

    const sum = arrayNumber.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    console.log("----------Exercise 8----------");
    console.log(sum);
  } catch (error) {
    console.log("Please pass numbers!!");
  }
};

sumFinder(1, 2, 3, 4, 5);

// Exercise 9: make a function that takes an unkown number of arguments of any type and adds them in an array and returns the array, if the argument is an array it should add it's values to the array that will be returned by the function

const arrayReturner = (...args) => {
  let allArgs = [...args];
  const flattenedArray = allArgs.flat();
  return flattenedArray;
};

const returnedArray = arrayReturner(1, true, 3, [4, 5], "str");
console.log("-----------Exercise 9-----------");
console.log(returnedArray);

// Exercise 10: destructure the property street in a variable named street from the object person
const destructureStreet = (person) => {
  const { street } = person.address;

  console.log("-----------Exercise 10-----------");
  console.log(street);
};
destructureStreet(person);

// Exercise 11: write a function that everytime you call it, it returns a number that increments starting from 0

let number = 0;

const increaseWhenCalled = () => {
  number = number + 1;
  return number;
};
increaseWhenCalled();
increaseWhenCalled();
console.log("-----------Exercise 11-----------");
console.log(number);

// Exercise 12: create a function that destructures the query parameters of a url and adds them in an object as key value pairs and then returns the object

const queryDestructurer = (url) => {
  const splitted = url.split("?");
  const params = splitted[1].split("&");

  let obj = {};
  const keyValue = params.map((param) => param.split("="));
  console.log(keyValue);

  for (let i = 0; i < keyValue.length; i++) {
    for (let j = 0; j < keyValue[i].length; j++) {
      obj[keyValue[i][0]] = keyValue[i][1];
    }
  }

  return obj;
};
console.log("--------Exercise 12-------");
const paramObj = queryDestructurer("https://hello.com?search=hello&id=4");
console.log(paramObj);
