 // there cant be a 1 touching a 1 (adjacent)
 // n = new flowers
 // needs to have 3 zeros in order to place 1 n
 // so initialize a (3) zero count
 // loop through flowerbed (to check if theres 3 zeros)
 // if (flowerbed[i] && flowerbed[i+1] && flowerbed[i+2] === 0)
 // then zeroCount++
 // (else should continue the loop counting if theres 3 zeros)
 // we can have another if statement outside the loop
 // if zeroCount >= n return true
 // otherwise false

 var canPlaceFlowers = function(flowerbed, n) {
    let canBePlanted = 0;
    let i = 0;
    while (i < flowerbed.length) {
        if (flowerbed[i]===0 && 
            ((flowerbed[i-1]===0) || (i===0)) && 
            ((flowerbed[i+1]===0) || (i===flowerbed.length-1))) {
               canBePlanted++;
               flowerbed[i] = 1;
        } i++
    }
    console.log(flowerbed)
    console.log(canBePlanted); 
    return (n <= canBePlanted);
};
console.log(canPlaceFlowers([1,0,0,0,1], 1));