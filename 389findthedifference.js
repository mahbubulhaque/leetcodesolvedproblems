/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var len = t.length,
        str=0,
        i=0;
    for (i=0; i<len; i++){
        if(!!s[i])
            str ^= s.charCodeAt(i) ^ t.charCodeAt(i);
        else
            str ^= t.charCodeAt(i);
    }
    return String.fromCharCode(str);
};
