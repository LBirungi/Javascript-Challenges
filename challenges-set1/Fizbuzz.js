const R = 3;
const RK = 5;
let trail= "axe";
let test = "gracee";
let lengthOfAxe=trail.length;
let lengthOfGrace=test.length;
console.log(lengthOfAxe);


function fizzBuzz(a,b){
    let combinedLength=a.length+b.length;
    console.log(combinedLength);
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

/* 3 question */
function twoSum(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                return [i,j]
            }
        }
    }
}
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,2,4],6));

/* array, if and for loop */
/*  */
function firstPalindrome(words){
    for(let i=0;i<words.length;i++){
       /*  console.log(words[i]);
        console.log(words[i].split('').reverse().join('')) */
        if(words[i]===words[i].split('').reverse().join('')){ 
            return words[i]
    
       }
    } 
    return ''
}

console.log(firstPalindrome(['abc','car','ada','racecar','cool']));

let unsorted =[3.0,'a','7',x,20,'d',4,'f',8]

function oneCharacter(a){
    let sortValueObject = {
        evens:[],
        odds:[],
        chars:[]

    }
    for(let i=0;i<a.length;i++){

   
    if (a[0]%2===0){
            sortValueObject.evens=i;
    }
        }
    return sorted{
        evens:
        odds:
        chars:
    }
}