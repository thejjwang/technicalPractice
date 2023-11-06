// function taking in array nums
// nums.length = n
// initialize new array ans.length = 2n 
// ans[i] === nums[i] & ans[i+n] === nums[i] for 0 <= i < n
// return ans

const getConcatenation = (nums) => {
    let length = nums.length
    let ans = [];
    for (let i = 0; i < length*2; i++) {
        if (i >= length) {
            ans[i] = nums[i-length];
        } else {
            ans[i] = nums[i]
        }
    }
    return ans

}
console.log(getConcatenation([1,2,1]));