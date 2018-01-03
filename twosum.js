/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// this algorithm has complexity of n2, there is more efficient algorithm which will be tried later
var twoSum = function(nums, target) {
    var numLength = nums.length;

    for(i=0; i<numLength; i++) {
        for(j=i+1; j<numLength; j++) {
            if(num[i] + num[j] === target) {
                return [i,j];
            }
        }
    }
};

