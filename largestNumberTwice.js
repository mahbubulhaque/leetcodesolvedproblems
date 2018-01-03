var dominantIndex = function(nums) {
    var numLength = nums.length,
        i,
        max = 0,
        output = -1,
        j;
    
    for(i=0; i<numLength; i++) {
        if(nums[i] > max) {
            max = nums[i];
            output = i;
        }
    }
    for(i=0; i<numLength; i++) {
        if(nums[i]*2 > max && nums[i] != max) {
            output = -1;
            break;
        }
    }
    return output;    
};
