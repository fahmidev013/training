// https://app.codility.com/demo/results/trainingBQ3DPJ-8GA/

function solution(K, A) {
  var N = A.length;
  var maximalRopes = 0;
  var currentLength = 0;

  for (var i = 0; i < N; i++) {
    var ropeLength = A[i];
    currentLength += ropeLength;
    if (currentLength >= K) {
      maximalRopes++;
      currentLength = 0;
    }
  }

  return maximalRopes;
}