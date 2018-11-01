function solution(A) {
  var arr = A.sort(function (a, b) { return a - b; });

  return Math.max(arr[0] * arr[1] * arr[arr.length - 1], arr[arr.length - 3] * arr[arr.length - 2] * arr[arr.length - 1]);
}