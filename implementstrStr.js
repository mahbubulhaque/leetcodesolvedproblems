/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var needleLen = needle.length,
        haystackLen = haystack.length,
        result=-1,
        flag,
        i,
        j;
    
    if(needleLen === 0) {
        return 0;
    }
    for (i=0; i<haystackLen-needleLen+1; i++) {
        flag = 1;
        for (j=0; j<needleLen; j++) {
            if (haystack[i+j] === needle[j]){
                if (j==0){
                    result = i;    
                }                
            } else {
                flag = 2;
                break;
            }
        }
        if (flag === 2) {
            result = -1;
        } else if (flag === 1) {
            break;
        }        
    }
    return result;
};


// better approach to solve it
var strStr = function(haystack, needle) {
    let n = haystack.length
    let m = needle.length

    for(let i = 0; i <= n - m; i++){
        let s = haystack.substring(i, i+m)
        if (s === needle) {
            return i
        }
    }
    return -1
};
