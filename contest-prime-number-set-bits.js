/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function(L, R) {
    var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97],
        i,
        check,
        noOfPrimeSet = 0;
    
    function noOfSetBits(n) {
        var count=0;
        while(n != 0){
            n = n&(n-1);
            count++;
        }
        return count;
    }
    function checkPrimeSet(n) {
        var c = noOfSetBits(n);
        if(primes.indexOf(c) !== -1){
            return true;
        } else {
            return false;
        }
    }
    for(i=L; i<=R; i++){
        check = checkPrimeSet(i);
        if(check===true){
            noOfPrimeSet ++;
        }
    }
    return noOfPrimeSet;
};
