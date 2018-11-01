// https://app.codility.com/demo/results/training4UJ6W2-MDP/

function solution(M, A) {
  var N = A.length;
  var max = 1000000000;
  var total = 0;

  for (var back = 0; back < N; back++) {
    front = back;
    var distinct = new Set();
    while (front < N && !distinct.has(A[front])) {
      distinct.add(A[front]);
      front++;
      total++;
    }
  }

  if (total > max) {
    return max;
  }

  return total;
}

function caterpillar(A, S) {
  var N = A.length;
  var front = 0;
  var total = 0;

  for (var back = 0; back < N; back++) {
    while (front < N && total + A[front] <= S) {
      total += A[front];
      front++;
    }
    if (total == S) {
      return true;
    }
    total -= A[back];
  }

  return false;
} 