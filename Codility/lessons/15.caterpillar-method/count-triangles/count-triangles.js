// https://app.codility.com/demo/results/trainingW5FQFC-ZTV/

function solution(A) {
  var N = A.length;
  var arr = A.sort((a, b) => a - b);
  var total = 0;

  for (var P = 0; P < N; P++) {
    for (var Q = P + 1; Q < N - 1; Q++) {
      var R = Q + 1;
      while (R < N && A[P] + A[Q] > A[R]) {
        R++;
        total++;
      }
    }
  }

  return total;
}