/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var stringLen = s.length,
        trimmedString = "",
        trimmedLen = 0,
        charCode,
        i,
        j,
        returnValue = true;
    
    function trimStr(s) {
        var trimmedString = "",
            stringLen = s.length;
        
        for (i=0; i<stringLen; i++) {
            charCode = s.charCodeAt(i);
            if(charCode >= 48 && charCode <= 57) {
                trimmedString += s[i];
            } else if (charCode >= 65 && charCode <= 90) {
                trimmedString += s[i];
            } else if (charCode >= 97 && charCode <= 122) {
                trimmedString += s[i];
            } else {

            }
        }
        return trimmedString;
    }
    
    if (stringLen === 0) {
        return true;
    }
    s = s.toLowerCase();
    trimmedString = trimStr(s);
    trimmedLen = trimmedString.length;
    j = trimmedLen -1;
    for (i=0; i< Math.floor(trimmedLen/2); i++) {
        if(trimmedString[i] === trimmedString[j]) {
            returnValue = true;                                                                
        } else {                                                              
            returnValue = false;
            break;
        }
        j--;
    }
    return returnValue;
};


// better approach
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "")
    let lo = 0, hi = s.length - 1
    
    while( lo < hi ){
        if(s[lo].toLowerCase() !== s[hi].toLowerCase()) return false
        lo++; hi--
    }
    
    return true
    
};
