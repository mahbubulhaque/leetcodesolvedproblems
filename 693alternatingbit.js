/**
 * @param {number} n
 * @return {boolean}
 */
// n XOR n>>1 should be equal to (pow(2,no of bits for that number) -1)
// 101010
// 010101
//-------
// 111111
// for alternating bits
var hasAlternatingBits = function(n) {
    if((n^(n>>1)) === Math.pow(2,(n>>0).toString(2).length)-1){
        return true;
    } else{
        return false;
    }
    
};
