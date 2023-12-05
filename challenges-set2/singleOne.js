// 4. Given a non-empty array of integers nums, every element appears
// twice except for one. Find that single one.

function singleOne(nums){
    //Sort the array
        nums.sort()
     for(let i=0;i<nums.length;i++){
    // check if next element is same as 2 element -->
         if(nums[i]==nums[i+1]){
             i++
         }else{
             return nums[i]
         }
     };
}
let nums = [4, 2, 2, 1, 2];
console.log(singleOne(nums)); 