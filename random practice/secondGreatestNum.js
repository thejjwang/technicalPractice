const findSecondGreatestNum = (nums) => {
    let greatestNum = Math.max(...nums);
    console.log(greatestNum);

    let indexGreatestNum = nums.indexOf(greatestNum);
    nums.splice(indexGreatestNum, 1);

    return Math.max(...nums)
    // let greatestNum = nums[0];
    // for (let i = 1; i < nums.length; i++) {
    //     if (nums[i] > greatestNum) {
    //         greatestNum = nums[i];
    //     }
    // }
    // let greatestNumIndex = nums.indexOf(greatestNum);
    // delete nums[greatestNumIndex];

    // let newGreatestNum = nums[0];

    // for (let j = 0; j < nums.length; j++) {
    //     if (nums[j] > newGreatestNum) {
    //         newGreatestNum = nums[j];
    //     }
    // }
    // return newGreatestNum;
}

console.log(findSecondGreatestNum([-12, -1, 0, -100 ]));