function recursion(A, n) {
  if (n === 0) {

    return Math.min(A[n] * -1, A[n] * 1);
  }


  console.log(`Math.min(recursion(A, ${n - 1}) + A[${n}], recursion(A, ${n - 1}) + (A[${n}] * -1))`,
    Math.min(recursion(A, n - 1) + A[n], recursion(A, n - 1) + (A[n] * -1)));

  return Math.min(recursion(A, n - 1) + A[n], recursion(A, n - 1) + (A[n] * -1));
  // return sum + Math.min((A[n] * -1) * val(A, n - 1, sum + (A[n] * -1)), (A[n] * 1) * val(A, n - 1, sum + (A[n] * 1)));
}

function solution(A) {
  var N = A.length;

  if (N === 0) return 0;

  // var X = [];
  // X[0] = Math.min(A[0], A[0] * -1);

  // for (var i = 1; i < N; i++) {
  //   var positive = X[i - 1] + A[i];
  //   var negative = X[i - 1] + (A[i] * -1)
  //   X[i] = Math.min(positive, negative);
  // }
  // console.log(X);
  // return X[N - 1];

  recursion(A, N - 1);
}

console.log(solution([1, 5, 2, -2]));