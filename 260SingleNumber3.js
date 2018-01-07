/**
 * @param {number[]} nums
 * @return {number[]}
 */
// solving this problem using hashtable similar another problem solved in bitwise xor

var singleNumber = function(nums) {
    var hashObject = {},
    i,
    numsLen = nums.length;

    for (i=0; i<numsLen; i++){
        if( hashObject.hasOwnProperty(nums[i]) ) {
            hashObject[nums[i]] ++;
            if(hashObject[nums[i]] === 2){
                delete hashObject[nums[i]];
            }
        } else {
            hashObject[nums[i]] = 1;
        }
    }

    return [parseInt( Object.keys(hashObject)[0], 10), parseInt( Object.keys(hashObject)[1], 10)];
};
