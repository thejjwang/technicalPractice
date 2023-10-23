// Given an integer array nums, move all 0's to the end of it while maintaining 
// the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// function taking in nums array 
// initialize numbers arr
// initialize zeros arr
// loop through nums 
// check if nums[i] === 0 
// if its 0 push it to zeros arr
// else push to numbers arr
// return and concat the arrays

const moveZeros = (arr) => {
    let numbersArr = [];
    let zerosArr = [];
    for (let num of arr) {
        if (num === 0) {
            zerosArr.push(num);
        } else {
            numbersArr.push(num);
        }
    }
    return numbersArr.concat(zerosArr);
}
console.log(moveZeros([0,1,0,3,12]))
