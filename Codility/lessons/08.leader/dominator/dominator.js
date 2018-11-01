// https://app.codility.com/demo/results/trainingWHP26R-U7N/

function solution(A) {
  var N = A.length;
  var arr = Object.assign([], A);
  arr.sort(function (a, b) { return a - b; });
  var middle = parseInt(arr.length / 2);
  var candidate = arr[middle];
  var leader, count = 0;
  var indexes = [];

  for (var i = 0; i < N; i++) {
    if (arr[i] === candidate) {
      count++;
    }
  }

  if (count > middle) {
    leader = candidate;
  }

  if (leader) {
    for (var i = 0; i < N; i++) {
      if (A[i] === leader) {
        return i;
      }
    }
  } else {
    return -1;
  }
}