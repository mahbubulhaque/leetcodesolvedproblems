/**
 * @param {number[]} nums
 * @return {number}
 */

// done using bit manipulation,
// can be done by array repeating, hashTable, Math etc.
var missingNumber = function(nums) {
    var i,        
        len = nums.length,
        result = len;
    
    for(i=0; i< len; i++) {
        result ^= i^nums[i];
    }
    return result;
};
