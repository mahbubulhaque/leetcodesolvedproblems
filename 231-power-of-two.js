/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <= 0)
        return false;
    if(n === 1)
        return true;
    if(!(n&(n-1)))
        return true;
    else
        return false;
};
