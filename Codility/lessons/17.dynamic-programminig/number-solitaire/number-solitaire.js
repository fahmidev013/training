// https://app.codility.com/demo/results/training3N69TS-6C8/

function solution(A) {
  var N = A.length;
  var memo = new Array(N);
  for (var i = 0; i < N; i++) { memo[i] = -2147483648; }
  memo[0] = A[0];

  for (var i = 1; i < N; i++) {
    for (var j = 1; j < 7; j++) {
      if (i - j >= 0) {
        memo[i] = Math.max(memo[i], A[i] + memo[i - j]);
      }
    }
  }

  return memo[N - 1];
}

console.log(solution([1, -2, 0, 9, -1, -2]));
console.log(solution([1, -2]));