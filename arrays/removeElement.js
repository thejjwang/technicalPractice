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
    let k = 0; // Initialize the count of non-val elements

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Overwrite elements at index k
            k++; // Increment k for each non-val element found
        }
    }

    return k; // Return the count of non-val elements
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
const k = removeElement(nums, val);
console.log("Length:", k); // Updated length (k)
console.log("Array:", nums.slice(0, k)); // Updated array containing non-val elements
