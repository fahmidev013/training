/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, 
 * compute how much water it is able to trap after raining.
 * 
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 *  */

function trappingRainWater(arr) {
  var N = arr.length;
  var left = 1;
  var right = parseInt(N) - 2;
  var trappedWater = 0;
  var lmax = arr[0];
  var rmax = arr[N - 1];

  if (arr.length < 3) {
    return 0;
  }

  while (left <= right) {
    if (lmax < rmax) {
      lmax = Math.max(lmax, arr[left]);
      trappedWater += (lmax - arr[left]);
      left++;
    } else {
      rmax = Math.max(rmax, arr[right]);
      trappedWater += (rmax - arr[right]);
      right--;
    }
  }

  return trappedWater;
}

console.log(`Expect ${trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])} to be equal to 6`);