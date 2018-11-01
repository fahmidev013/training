// https://app.codility.com/demo/results/trainingJE2THU-AZD/

function solution(N) {
  var factors = 0;

  // O(n) complexity
  // for(var i = 2; i <= N; i++){
  //     if (N % i === 0) {
  //         factors++;
  //     }
  // }

  // O(√n) complexity
  var i = 1;
  while (i * i < N) {
    if (N % i == 0) {
      factors += 2;
    }
    i += 1;
  }
  if (i * i == N) {
    factors += 1;
  }

  return factors;
}