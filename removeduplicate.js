var removeDuplicates = function(nums) {
    var len=1,
        i=0;
    while(!!nums[i+1] || nums[i+1]==0) {
        if(nums[i] === nums[i+1]) {
            nums.splice(i+1,1);
        }else {
            i++;
        }
    }
    return nums.length;
};
