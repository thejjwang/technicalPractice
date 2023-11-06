// function taking in array nums
// nums.length = n
// initialize new array ans.length = 2n 
// ans[i] === nums[i] & ans[i+n] === nums[i] for 0 <= i < n
// return ans

const getConcatenation = (nums) => {
    // let ans = nums + nums
    // for (let i = 0; i < nums.length; i++) {
    //     ans.push(nums[i]);
    // }
    // console.log(ans);
    return [...nums, ...nums]

}
console.log(getConcatenation([1,2,1]));