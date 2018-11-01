// https://app.codility.com/demo/results/trainingFM3EZQ-NFM/

function solution(A) {
  var N = A.length;
  var maxHeight = 0;
  var minHeight = 0;
  var maxDepth = 0;

  for (var i = 0; i < N; i++) {
    var depth;
    if (A[i] > maxHeight) {
      depth = maxHeight - minHeight;
      maxHeight = A[i];
      minHeight = A[i];
    } else if (A[i] < minHeight) {
      minHeight = A[i];
    } else {
      depth = A[i] - minHeight;
    }

    if (depth > maxDepth) {
      maxDepth = depth;
    }
  }

  return maxDepth;
}