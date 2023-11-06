// function taking in nums array sorted in non-decreasing order
// initialize k (being the dupe count)
// loop through array checking if any nums[i] values are the same if they are the same
// add 1 to k
// at end of loop return k

const removeDuplicates = (nums) => {
    let k = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[k-1]) {
            nums[k] = nums[i]
            k++
        }
    }
    return k

}