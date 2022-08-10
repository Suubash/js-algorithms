// Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

// const input = [ { name: 'John', age: 13 }, { name: 'Mark', age: 56, }, { name: 'Rachel', age: 45, }, { name: 'Nate', age: 67, }, { name: 'Jeniffer', age: 65, } ];

// output = [13, 67, 54]

const respectiveAgesAndDifference = (input) => {
  try {
    const ages = input.map((member) => member.age);

    const sortedAges = ages.sort((a, b) => a - b);

    const minAge = sortedAges[0];
    const maxAge = sortedAges[sortedAges.length - 1];

    const respectiveAges = [minAge, maxAge, maxAge - minAge];
    console.log(respectiveAges);
  } catch (error) {
    console.log("Please enter valid input type!!");
  }
};

const input = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];

respectiveAgesAndDifference(input);
