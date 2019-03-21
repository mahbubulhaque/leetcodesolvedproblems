/**
 * @param {number[]} digits
 * @return {number[]}
 */
// my solution
var plusOne = function(digits) {
    var len   = digits.length - 1,
          carry = 0,
          temp  = 0;
      
      for(var i=len; i>=0; i--) {  
          temp = 0;
          if(carry > 0) {
              temp = digits[i] + 1;
              digits[i] = (carry + digits[i]) % 10;
          }
          if(i == len){
              temp = digits[i] + 1; 
              digits[i] = (digits[i] + 1) % 10;
          }        
          carry = parseInt(temp/10);
          if( carry<1) {
              break;
          }
          if(i == 0 && carry > 0) {
              digits.reverse();
              digits.push(1);
              digits.reverse();
              break;
          } 
      }
      return digits;
    
};

// best solution as per memory concern 
var plusOne = function(digits) {
    //if (digits.length === 1 && digits[0] === 9) return [1, 0];
    
    for (let i = digits.length-1; i >= 0; i--){
        if (digits[i] === 9){
            digits[i] = 0;
        }else{
            digits[i]++;
            return digits
        }
    }
    digits.unshift(1)
    return digits;
};


// best solution according to time complexity
var plusOne = function(digits) {
    var len = digits.length;
    while(--len > -1) {
        var ret = digits[len] + 1;
        if (ret > 9) {
            digits[len] = 0;
            if (len === 0) {
                digits.unshift(1);
            }
        } else {
            digits[len] = ret;
            break;
        }
    }
    return digits;
};
