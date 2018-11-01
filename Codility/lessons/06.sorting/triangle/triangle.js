function solution(A) {
  var arr = A.sort(function (a, b) { return a - b; });
  if (arr.length < 3) {
    return 0;
  } else {
    for (var i = 0; i < arr.length - 2; i++) {
      if (arr[i] + arr[i + 1] > arr[i + 2]) {
        return 1;
      }
    }
  }

  return 0;
}
