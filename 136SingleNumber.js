/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var i,
        result = 0,
        len = nums.length;

    for (i=0; i<len; i++) {
        result = result ^ nums[i];
    }
    return result;
};
