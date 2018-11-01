// https://app.codility.com/demo/results/trainingD76NCZ-JDZ/

function solution(A) {
  var N = A.length;

  var prefixSums = [0];
  for (var k = 1; k < N + 1; k++) {
    prefixSums[k] = prefixSums[k - 1] + A[k - 1];
  }

  var maxSum;

  if (N === 3) {
    return 0;
  }

  for (var x = 0; x < A.length - 2; x++) {
    for (var z = x + 2; z < A.length; z++) {
      for (var y = x + 1; y < z; y++) {
        var leftSum = prefixSums[y] - prefixSums[x + 1];
        var rightSum = prefixSums[z] - prefixSums[y + 1];
        var totalSum = leftSum + rightSum;

        if (!maxSum || maxSum < totalSum) {
          maxSum = totalSum;
        }
      }
    }
  }

  return maxSum;
}