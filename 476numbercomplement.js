var findComplement = function(num) {
    var result;
    result = num^(Math.pow(2,(num>>0).toString(2).length)-1);
  return result
};
