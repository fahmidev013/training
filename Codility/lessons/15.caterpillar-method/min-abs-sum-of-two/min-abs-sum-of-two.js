// https://app.codility.com/demo/results/trainingUAWYDD-H2H/

function solution(A) {
  var N = A.length;
  var minAbsSum;

  for (var back = 0; back < N; back++) {
    front = back;
    var distinct = new Set();

    while (front < N && !distinct.has(A[front])) {
      distinct.add(A[front]);

      var sum = A[back] + A[front]
      if (minAbsSum === undefined || Math.abs(sum) < minAbsSum) {
        minAbsSum = Math.abs(sum);
      }

      front++;
    }
  }

  return minAbsSum;
}