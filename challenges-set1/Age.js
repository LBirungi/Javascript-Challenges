/* Function that identifies wether user is a minor,elder or youth */
const yearOfBirth = prompt("Input your year of birth");
const currentYear = new Date().getFullYear();
let inputAge = currentYear - yearOfBirth;
const age = () => {
  if (inputAge < 18) {
    console.log("Your are a Minor");
  } else if (inputAge >= 18 && inputAge <= 36) {
    console.log("Your are a Youth");
  } else {
    console.log("Your are an Elder");
  }
};
age();