//  https://app.codility.com/demo/results/trainingW79SVD-DSP/

function solution(A) {
  var N = A.length;
  var peaks = [];

  if (N < 3) return 0;

  // Get all the peaks in the array
  for (var i = 1; i < N - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  var peaksCount = peaks.length;

  if (peaksCount === 0) {
    return 0;
  } else if (peaksCount === 1) {
    return 1;
  }

  for (var flags = peaksCount; flags > 0; flags--) {
    var flagsPlaced = 1;
    var startIndex = 0;
    var endIndex = startIndex + 1;

    while (endIndex < peaksCount) {
      if ((peaks[endIndex] - peaks[startIndex]) / flags >= 1) {
        flagsPlaced++;
        if (flagsPlaced === flags) {
          return flags;
        }
        startIndex = endIndex;
        endIndex++;
      } else if (flags < peaksCount) {
        endIndex++;
      } else {
        break;
      }
    }

    if (flagsPlaced === flags) {
      return flags;
    }
  }

  return 0;
}