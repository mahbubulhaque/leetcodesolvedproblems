/**
 * @param {number[]} digits
 * @return {number[]}
 */
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
