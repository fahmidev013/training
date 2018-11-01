function solution(N, A) {
  var counters = [];
  var maxCounter = 0;
  var lastMaxCounter = 0;

  // Initialize the counters
  for (var i = 0; i < N; ++i) counters[i] = 0;

  // Consecutive operations
  for (var k = 0; k < A.length; ++k) {
    var x = A[k] - 1;
    if (A[k] > N) {
      // Max counter
      if (maxCounter > lastMaxCounter) {
        for (var i = 0; i < N; ++i) counters[i] = maxCounter;
        lastMaxCounter = maxCounter;
      }
    } else {
      // Increase x
      counters[x]++;
      if (counters[x] > maxCounter) {
        maxCounter = counters[x];
      }
    }
  }

  return counters;
}
