/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var revNumber = 0,
        isNegative,
        maxRange = 2147483647,
        minRange = -2147483648,
        absNumber = Math.abs(x),
        noOfDigits = Math.floor(Math.log10(absNumber));

    if(x<0){
        isNegative = true;
    }

    for(i=0; i<= noOfDigits; i++) {
        revNumber += ( Math.floor( absNumber / Math.pow(10,i) ) % 10 ) * Math.pow(10,noOfDigits-i);
        if(revNumber > maxRange) {
            revNumber = 0;
            break;
        }
    }
    if(!!revNumber) {
        if(isNegative) {
            revNumber = 0 - revNumber;
        }
    }
    return revNumber;
};

// most efficient solution done by other:
// https://leetcode.com/submissions/detail/134121870/
var reverse = function(x) {
    var absX = Math.abs(x)
    var result = 0
    while(absX > 0) {
        result = result * 10 + absX % 10
        absX = parseInt(absX / 10, 10)
    }
    result = x < 0 ? -result : result
    return result >= -Math.pow(2, 31) && result <= Math.pow(2, 31) - 1 ? result : 0
};
