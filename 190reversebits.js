/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var reverse = 0,
        last = 0,
        i=0;
    while (i<32) {
        last = n & 1;
        n = n >> 1;
        
        reverse = reverse<<1;
        reverse += last;
        i++;
    }
    // number>>>0 makes it unsigned int
    return reverse>>>0;
};
