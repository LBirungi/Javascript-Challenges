// Given an integer array nums, return true if any value appears at least
// twice in the array, and return false if every element is distinct.


function repeatTrue(nums) {
    // removes duplicates from num array & compares with original set for length
    return new Set(nums).size !== nums.length;
}
console.log(repeatTrue([1,4,6,7]));