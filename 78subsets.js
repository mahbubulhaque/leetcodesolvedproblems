/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function subsets(nums) {
  var len = nums.length,
      i,
      j,
      bin,
      tempArray,
      outputArray = [];
  for (i=0; i<Math.pow(2,len); i++) {
    bin = (i >> 0).toString(2);
    bin = bin.padStart(len, '0');
    // console.log(bin);
    tempArray = [];
    for(j=0; j<len; j++){
      if(bin[j]=='1') {
        tempArray.push(nums[len-j-1]);
      }
    }
    outputArray.push(tempArray);
  }
//   document.write(outputArray);
  
//   console.log(outputArray)
    return outputArray;
}
//subsets([1,2,3]);


// another way to solve it:
function possibleSubsets(A,N)
{
    for(var i=0; i<(1<<N); i++)  // লুপটা 1 << N অর্থাৎ 2N পর্যন্ত ঘুরবে
    {
        for(var j=0; j<N; j++){
            if(i & (1<<j))
                document.write(A[j]);
				document.write('');
        }
		document.write('..........');
    }
}

// most efficient way in leetcode
function subsets(nums) {
  result = [];
  powerSetUtil(0, nums.length - 1, nums, result, []);
  return result;
}

function powerSetUtil(start, end, nums, result, subset) {
  result.push(subset);
  for (let i = start; i <= end; i++) {
    subset.push(nums[i]);
    powerSetUtil(i + 1, end, nums, result, subset.slice());
    subset.pop()
  }
}
