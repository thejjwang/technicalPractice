// function taking in array of integers 
// initalize new arr
// loop through array.lenght
// if array[i] === 0 then slice that value
// also array.push(0) for each slice

const moveZeroes = (array) => {
    let zeroArr = [];
    let numArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            zeroArr.push(array[i])
        } else {
            numArr.push(array[i])
        }
    }
    return numArr.concat(zeroArr)
}
console.log(moveZeroes([0,1,0,3,12]))