// https://app.codility.com/demo/results/training32BMT8-5AS/

function solution(A) {
  var distinctValues = new Set();

  for (var i = 0; i < A.length; i++) {
    var value = A[i];
    if (value < 0) {
      value *= -1;
    }
    distinctValues.add(value);
  }

  return distinctValues.size;
}
