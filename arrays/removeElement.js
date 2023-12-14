/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 // function taking in nums and val
 // nums = []
 // val = integer 
 // loop through arr 
 // intialize index
 // for (let i = 0; i < nums.length -1; i++)
 // remove the integers that the user inputted for val
 // if nums[i] === val, remove in place
 // then nums.splice(i)
 // return nums.length after removing elements
 var removeElement = function(nums, val) {
    let index = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
 };
 console.log(removeElement([0,1,2,2,3,0,4,2], 2));