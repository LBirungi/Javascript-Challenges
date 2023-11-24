/* a function that writes my name on the console */
function myName(){
    console.log('Lillian');
}
myName();
/* function that prints Hello,World to the console */
function greet(){
    console.log('Hello,World');
}
greet();
/* function that takes a name as parameter and returns a greeting */
function sayHello(name){
    console.log('Hello'+' '+ name)
}
sayHello('Lillian')
/* function that adds two numbers */
function addNumbers(a,b){

    let summs = a+b;
    console.log(summs)

}
addNumbers(5,7);
/* function that multiplies 2 numbers */
function multi(a,b){
    let multiple = a*b;
    console.log(multiple)
}
multi(2,3);
/* function that returns a square of a number */
function squared(a){
    let square = a*a;
    return square;
}
console.log(squared(7));
/* function that shows wether a number is even or odd */
function isEvenOrOdd(a){
    if (a%2==0){
        return true
    } else{
        return false
    }
}
console.log(isEvenOrOdd(13))
/* function that converts a string to upper case */
function convertToUpperCase(a){
    return a.toUpperCase()
}
console.log(convertToUpperCase('Lillian'));
/* function that calculates an area of a circle */
function areaOfACircle(r){
    return Math.PI*r*r
}
console.log(areaOfACircle(5));
/* function that takes 3 parameters and returns one sentence */
function joinWords(a,b,c){
    return a +' '+b+' '+c
}
console.log(joinWords('I','Love','Jesus'));

/* Roland */
/* function sortArray(arrInput){
    let arr = arrInput
    let copyOfArr = [...arr];
    
    for(let i=0; i<copyOfArr.length; i++){
        let valueOfi = copyOfArr[i];
        for(let j=0; j<arr.length; j++){
            if(copyOfArr[i] < arr[j] && copyOfArr[i] !== arr[j]){
                arr[arr.indexOf(valueOfi)] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr.reverse();
}

sortArray([3,1,9,7]) */
/* the ode does not work because the variable temp is not defined ,
/* This code sorts an array in ascending order without using the sort array method */
function sortArray(arrInput){
    let arr = arrInput/* entered argument */
    let copyOfArr = [...arr];/* create a new copy of array(spread operator),spread operator so you don't change contents of original array */
    console.log(copyOfArr);/* Makes a copy of the function at [..arr],use index of copy array to compare with original:*/
    
    for(let i=0; i<copyOfArr.length; i++){/* loop startting with copy of array */
        let valueOfi = copyOfArr[i];/* get the card in hand */
        for(let j=0; j<arr.length; j++){/* nested loop,loop the inner one first before it gets out and iterates fisrt loop */
            if(copyOfArr[i] < arr[j] && copyOfArr[i] !== arr[j]){/* copyOfArr[i] should be valueOfi */
                arr[arr.indexOf(valueOfi)] = arr[j];/* swap and give it value at index j */
                arr[j] = valueOfi;
            }
        }
    }
    return arr.reverse();
}

console.log(sortArray([3,1,9,7]))
/* it does 4 things */
/* Makes a copy of the function at [..arr]: The function creates a copy of the list of numbers.
Loops Through: It looks at each number in the copy list and compares it with numbers in the original list to check if its not equal to the origin.
Swapping Places: If a number in the copy list is smaller and not in the right spot, they switch places in the original list.

Reverses: After all numbers find their spots, the list gets reversed to be from smallest to biggest and changes order at arr.reverse.

Result: For example, when given [3,1,9,7], it rearranges them to give back [1, 3, 7, 9 */
// varibale kelvin is constant = 293
const kelvin = 300;
// subtracting 273 from variable kelvin is equal to new varibale value celsius
let celsius = kelvin-273
/* fahrenheit is a variable set to formula celsius *(9/5) + 32 */
// Math.floor is a primitive object 
let fahrenheit = Math.floor(celsius *(9/5) + 32)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)