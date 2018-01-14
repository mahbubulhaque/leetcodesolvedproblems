/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    var noOfones = 0,
        returnValue = false;
    if(num === 0)
        return false;
    else if(num === 1)
        return true;
    
    if(!(num&(num-1))) {
        noOfones = ((num-1)>>0).toString(2).length;
        if(noOfones%2 === 0){
            returnValue = true;
        }
    }
    return returnValue;
};
