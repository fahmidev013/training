function solution(N, A) {
  var counters = [];
  var maxCounter = 0;
  var lastMaxCounter = 0;

  function setCounters(value) {
    for (var i = 0; i < N; ++i) {
      counters[i] = value;
    }
  }

  // Initialize the counters
  setCounters(0);

  // Consecutive operations
  for (var k = 0; k < A.length; ++k) {
    var operation = A[k];
    var x = operation - 1;
    if (operation > N) {
      // Max counter
      if (maxCounter > lastMaxCounter) {
        setCounters(maxCounter);
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