// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
 

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// function taking in 2 strings
// split and sort s and t then
// if string1.length !== string2.length can automatically return false
// for loop through string1 
// check if string1[i] != string2[i] return false
// otherwise return true

const validAnagram = (s, t) => {
    s = s.split("").sort()
    t = t.split("").sort()

    if (s.length !== t.length) {
        return false
    } 
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            return false
        }
    }
    return true

}

console.log(validAnagram("raca", "caaar"))