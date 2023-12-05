// . Given an array nums of size n, return the majority element. The majority
// element is the element that appears more than ⌊n / 2⌋ times. You may
// assume that the majority element always exists in the array.

// Function to find the majority element using Boyer-Moore Voting Algorithm
function maximum(nums) {
    let count = 0; // Counter to keep track of the current count of the potential majority 
    let newone = null; // The potential majority element

    // Loop through each element in the array
    for (const num of nums) {
        if (count === 0) {
            // If count reaches zero, update the potential majority element
            newone = num;
        }
        // Increment or decrement the count based on whether the current element matches the potential majority element
        count += (num === newone) ? 1 : -1;
    }

    return newone; // Return the found majority element
}

const nums = [3, 2, 3];
const maxElement = maximum(nums); 
console.log("Maximum Element:", maxElement); 
