// Coding Problem: Find the Missing Number
// You are given an array containing n distinct numbers taken from 0, 1, 2, ..., n. 
// However, one number is missing from the array. Your task is to find the missing number.
// Write a JavaScript function called findMissingNumber that takes an array of integers as 
// input and returns the missing number.
// Sum of first n positive integers = n(n + 1)/2, where n is the total number of integers

// function taking in array of numbers
// n = array.length 
// total sum = n(n + 1)/2
// loop through array
// calculate actual sum adding each of numbers together
// outside the loop, subtract actual sum from total sum
// return difference

const findMissingNumber = (arr) => {
    let n = arr.length;
    let totalSum = n * (n+1)/2;
    let actualSum = 0;
    for (num of arr) {
        actualSum += num;
    }
    return totalSum-actualSum;
}
console.log(findMissingNumber([3, 0, 1])); // Should return 2
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Should return 8