// https://app.codility.com/demo/results/training89KCBT-HG8/

function solution(A, B, C) {
  var maxC = Math.max(...C);
  var maxNailedPosition = 0;
  var possibleNails = new Array(maxC);
  var maxNailIndexUsed = 0;

  for (var i = 0; i < C.length; i++) {
    var nail = C[i];
    possibleNails[nail] = i;
  }

  for (var k = 0; k < A.length; k++) {
    var plankStart = A[k];
    var plankEnd = B[k];
    var nailed = false;

    if (plankStart <= maxNailedPosition) {
      nailed = true;
    } else {
      for (var n = plankEnd; n >= plankStart; n--) {
        if (possibleNails[n] > -1) {
          maxNailedPosition = n;
          if (maxNailIndexUsed < possibleNails[n]) {
            maxNailIndexUsed = possibleNails[n];
          }
          nailed = true;
          break;
        }
      }
    }

    if (!nailed) {
      return - 1;
    }
  }

  return maxNailIndexUsed + 1;
}

/*
  Binary search:

  function binarySearch(A, x) {
    var N = A.length;
    var beginning = 0;
    var end = N - 1;
    var result = -1;

    while (beginning <= end) {
      var mid = (beginning + end) / 2;
      if (A[mid] <= x) {
        beginning = mid + 1;
        result = mid;
      } else {
        end = mid - 1;
      }
    }

    return result;
  }
*/