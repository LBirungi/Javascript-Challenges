/*Function Fizzbuzz that takes 2 parameters
calculates combined length if divisible by 3,5 or both and
returns Fizz,Buzz,FizzBuzz
 */
let trail= "axeeee";
let test = "grraceeee";
function fizzBuzz(a,b){
    let combinedLength=a.length+b.length;
    if (combinedLength%3==0 && combinedLength%5==0){
        return "FizzBuzz";
    } else if (combinedLength%5==0){
        return "Buzz";
    } else if(combinedLength%3==0){
        return "Fizz";
    } else {
        return "not FizzBuzz"
    }
}
console.log(fizzBuzz(trail,test));