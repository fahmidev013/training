// https://app.codility.com/demo/results/training2VWPGR-HUU/

// function isNonOverlapping (A, B, x, y) {
//     return !(A[x] <= A[y] && A[y] <= B[x]) && !(A[y] <= A[x] && A[x] <= B[y]);
// }

function solution(A, B) {
  var N = A.length;
  var maxNumOfSegments = 0;
  var lastEnd = -1;

  if (N < 2) return N;

  // for (var i = 0; i < N; i++) {
  //     var currentLineStart = A[i];
  //     var currentLineEnd = B[i];
  //     var currentNumOfSegments = 1;
  //     var lastSegmentIndex = null;

  //     for (var j = i + 1; j < N; j++) {
  //         var lineStart = A[j];
  //         var lineEnd = B[j];

  //         if (isNonOverlapping(A, B, i, j)) {
  //             if (lastSegmentIndex === null || isNonOverlapping(A, B, lastSegmentIndex,j)) {
  //                 currentNumOfSegments++;
  //             }
  //         }

  //         lastSegmentIndex = j;
  //     }

  //     if (currentNumOfSegments > maxNumOfSegments) {
  //         maxNumOfSegments = currentNumOfSegments;
  //     }
  // }

  for (var i = 0; i < N; i++) {
    if (A[i] > lastEnd) {
      maxNumOfSegments++;
      lastEnd = B[i];
    }
  }

  return maxNumOfSegments;
}