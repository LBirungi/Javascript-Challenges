// function that repeatedly adds all its digits
// until the result has only one digit, and return it
// as long there are 2 digits

// function repeatedNums(num){
//       // check if its a single digit
      
//     if (num<10){
//         return (num)
//     } else{
//         return (num - 1) % 9 + 1 
//     }
    
// }
// console.log(repeatedNums(38));

function repeatedNums(num) {
    // Check if the number is already a single digit
    if (num < 10) {
      return num; // Return num if it's a single digit
    } else {
      while (num >= 10) {
        let sum = 0;
  
        // Extract digits and sum them up
        while (num > 0) {
          sum += num % 10;
          num = Math.floor(num / 10);
        }
        num = sum; // Update num with the sum 
      }
  
      return num; 
    }
  }
  console.log(repeatedNums(38)); 
  
