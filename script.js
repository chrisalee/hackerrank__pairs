/*
 * Complete the 'pairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */
 
 //below: Terminated due to timeout for larger data sets
/////////////////////////////////////////////////////////////////////////
function pairs(k, arr) {
    let pairs = 0;
    for(let i = 0; i < arr.length - 1; i++) {
      for(let j = i + 1; j < arr.length; j++) {
        if(Math.abs(arr[i] - arr[j]) === k) {
          pairs++;
        }
      }
    }
    console.log(pairs);
    return pairs;
}

/////////////////////////////////////////////////////////////////////////
function pairs(k, arr) {
  let pairs = 0;
  let uniqueNums = new Set(arr);
  uniqueNums.forEach((num) => {
    if(uniqueNums.has(num + k)) {
      pairs++;
    } 
  })
  return pairs;  
}
