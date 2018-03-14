function solution(A) {
  var smallestPositive = 1;

  var arr = A.sort((a, b) => {
    return a - b;
  });

  for (var i = 0; i < arr.length; ++i) {
    var num = arr[i];

    if (num > 0) {
      if (num == smallestPositive) {
        smallestPositive++;
      }
    }
  }

  return smallestPositive;
}