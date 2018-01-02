/**
 * @param {number[]} nums
 * @return {number}
 */
// solving this problem using bitwise xor similar another problem solved in hashtable
var singleNumber = function(nums) {
    var i,
        result = 0,
        len = nums.length;

    for (i=0; i<len; i++) {
        result = result ^ nums[i];
    }
    return result;
};
