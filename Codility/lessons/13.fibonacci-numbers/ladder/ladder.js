// https://app.codility.com/demo/results/trainingAEZN6Z-WUZ/

function fibonacci(n) {
  var fib = new Array(n).fill(0);
  fib[1] = 1;

  for (var i = 2; i <= n; i++) {
    fib[i] = (fib[i - 1] + fib[i - 2]) % Math.pow(2, 30);
  }

  return fib;
}

function solution(A, B) {
  var L = A.length;
  var fib = fibonacci(50001);
  var differentWays = [];

  for (var i = 0; i < L; i++) {
    var rungsCount = A[i];
    var modulo = Math.pow(2, B[i]);
    var ways = 0;

    ways = fib[rungsCount + 1];

    differentWays[i] = ways % modulo;
  }

  return differentWays;
}