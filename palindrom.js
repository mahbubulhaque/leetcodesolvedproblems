/**
 *@param {number} x
 *@return {boolean}
 */

var isPalindrome = function(x) {
    var returnValue = true,
        j=1,
        i;
    if(x<0){
        return false;
    }

    for (i=Math.floor(Math.log10(x)); i>Math.floor(Math.floor(Math.log10(x))/2); i--) {
        if(Math.floor(x/Math.pow(10,i))%10 === Math.floor((x%Math.pow(10,j))/Math.pow(10,j-1))) {
            returnValue = true;
        } else {
            returnValue = false;
            break;
        }
        j++;
    }
    return returnValue;
};
