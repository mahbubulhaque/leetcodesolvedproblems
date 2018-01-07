/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var di = x^y,
        count = 0;
    //Brian Kernighan’s Algorithm to count the no of 1's in a binary number
/*
 *	1  Initialize count: = 0
 *	2  If integer n is not zero
 *     		(a) Do bitwise & with (n-1) and assign the value back to n
 *       	    n: = n&(n-1)
 *    		(b) Increment count by 1
 *     		(c) go to step 2
 *      3  Else return count
*/
    while(di != 0) {
        di = di& (di-1);
        count++;
    }
    return count;
};
