// takes in array of numbers (+/-)
// returns sum of all even numbers

// function taking (array) of #
// initialize a sum
// loop over the array
// checking for an even number (if % 2 === 0)
// sum += array[i]
// outside loop return sum 

const returnEven = (arr) => {
    let sum = 0;
    for (let i = 0; i <= arr.length -1; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

console.log(returnEven([-2, 2, 0, 4, 5]))