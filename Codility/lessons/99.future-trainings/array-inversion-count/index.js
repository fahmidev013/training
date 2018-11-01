// https://app.codility.com/demo/results/trainingVGGP27-UWG/

function solution(A) {
  var N = A.length;
  var inversions = 0;

  for (var P = 0; P < N; P++) {
    for (var Q = P + 1; Q < N; Q++) {
      if (A[Q] < A[P]) {
        inversions++;
      }
    }
  }

  if (inversions > 1000000000) {
    inversions = -1;
  }

  return inversions;
}