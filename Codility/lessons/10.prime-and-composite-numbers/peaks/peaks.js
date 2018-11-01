// https://app.codility.com/demo/results/training6XUEW5-2PR/

function solution(A) {
  var N = A.length;
  var peaks = {};

  if (N < 3) return 0;

  // Get all the peaks in the array
  for (var i = 1; i < N - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks[i] = true;
    }
  }

  var peaksCount = Object.keys(peaks).length;

  if (peaksCount === 0) return 0;

  for (var blocks = peaksCount; blocks > 0; blocks--) {
    if (N % blocks === 0) {
      var blocksLength = N / blocks;
      var found = {};
      var foundCount = 0;

      for (var peak of Object.keys(peaks)) {
        peak = parseInt(peak);
        var blockNumber = parseInt(peak / blocksLength);
        if (!found[blockNumber]) {
          found[blockNumber] = true;
          foundCount++;
        }
      }

      if (foundCount === blocks) {
        return blocks;
      }
    }
  }

  return 0;
}