// https://app.codility.com/demo/results/trainingB3HR7T-YW7/

function solution(A) {
  var N = A.length;
  var nonDivisors = new Array(N);

  for (var i = 0; i < N; i++) {
    var number = A[i];
    var divisorsCount = 0;

    for (var j = 0; j < N; j++) {
      if (j === i) continue;

      var divisor = A[j];

      if (number % divisor === 0) {
        divisorsCount++;
      }
    }

    nonDivisors[i] = (N - 1) - divisorsCount;
  }

  return nonDivisors;
}