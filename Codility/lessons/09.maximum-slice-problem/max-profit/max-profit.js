// https://app.codility.com/demo/results/trainingBJ74YC-69Z/

// Part of the solution is based on the Kadane's algorithm

function solution(A) {
  var n = A.length;
  var maxEndingHere = 0;
  var maxSoFar = 0;
  var minPrice = A[0];

  for (var i = 1; i < n; i++) {
    maxEndingHere = Math.max(0, A[i] - minPrice);
    minPrice = Math.min(minPrice, A[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}