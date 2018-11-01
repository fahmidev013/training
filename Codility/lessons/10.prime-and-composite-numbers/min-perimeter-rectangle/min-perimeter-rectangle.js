// https://app.codility.com/demo/results/training499PSG-BHT/

function solution(N) {
  var minPerimeter;

  // O(n) complexity
  // if (N === 1) {
  //     return 4;
  // }

  // for (var i = 1; i <= parseInt(N/2); i++) {
  //     if (N % i === 0) {
  //         var perimeter = 2 * (i + N/i);
  //         if (!minPerimeter || perimeter < minPerimeter) {
  //             minPerimeter = perimeter;
  //         }
  //     }
  // }


  // O(√n) complexity
  var i = 1;

  while (i * i <= N) {
    if (N % i == 0) {
      var perimeter = 2 * (i + N / i);
      if (!minPerimeter || perimeter < minPerimeter) {
        minPerimeter = perimeter;
      }
    }
    i += 1;
  }

  return minPerimeter;
}