/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
};
// better way to do this
var mySqrt = function(x) {
    if( x == 0) return 0;
    let low = 1, high = x;
    let ans = 1;
    while( low <= high){
        let mid = low + (( high - low) >> 1);
        if( mid * mid  > x ) high = mid - 1;
        else if( mid * mid < x ) low = mid + 1;
        else return mid;
    }
    return low-1;
};
