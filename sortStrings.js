// You are given an array of strings that includes both lowercase and uppercase characters. 
// Your task is to sort the array in such a way that all lowercase strings come before uppercase strings, 
// while maintaining the relative order of lowercase and uppercase strings.
// Write a JavaScript function called sortStrings that takes an array of strings as input and returns the sorted array.
// For example, given the input ["apple", "Banana", "cherry", "Date"], the function should return ["apple", "cherry", "

// function taking in array of strings ["apple", "Banana", "cherry", "Date"
// initalize uppercase strings array
// initialize lowercase strings array
// loop through array grabbing each string
// if string[0] === string[0].toLowerCase(), then add to lowercase arra
// if not add the string to the uppercase string array    
// concatanate the lowercase arr with uppercase arr and return

const sortStrings = (arr) => {
    let uppercaseArr = [];
    let lowercaseArr = [];
    for (let str of arr) {
    // for (let i = 0; i < arr.length; i++) {
        // let word = arr[i];
        if (str[0] === str[0].toLowerCase()) {
            lowercaseArr.push(str);
        } else {
            uppercaseArr.push(str);
        }
    }
    return lowercaseArr.concat(uppercaseArr);

}
console.log(sortStrings(["aPPLE ", "Banana", "cherry", "date"]))