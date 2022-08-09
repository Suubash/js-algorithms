// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.

// const input = 'George Raymond Richard Martin';
// 'GRRM'

const findNameInitials = (string) => {
  try {
    const stringArray = string.split(" ");

    let combinedInitials = "";
    for (let element of stringArray) {
      combinedInitials = combinedInitials + element[0];
    }

    console.log(`'${combinedInitials}'`);
  } catch (error) {
    console.log("Please pass string or text!!");
  }
};

findNameInitials("George Raymond Richard Martin");
