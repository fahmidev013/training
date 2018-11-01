// https://app.codility.com/demo/results/trainingBXWTK9-MHG/

function solution(A) {
  var N = A.length;
  var maxEndingHere = A[0];
  var maxSoFar = A[0];

  for (var i = 1; i < N; i++) {
    maxEndingHere = Math.max(A[i], maxEndingHere + A[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}