// Solution was aimed for correctness. Its not optimized yet and its time complexity is O(N**3)

function solution(A) {
  const N = A.length;

  let minimalAverage = (A[0] + A[1]) / 2;
  let smallestStartingPos = 0;
  let averageCollision = false;

  for (let P = 0; P < N; ++P) {
    for (let Q = P + 1; Q < N; ++Q) {
      const slice = A.slice(P, Q + 1);
      const sliceLength = slice.length;
      const sum = slice.reduce((a, b) => a + b, 0);
      const avg = sum / sliceLength;

      // OPTIONAL: Memoize to apply dynamic programming

      if (avg === minimalAverage && P !== 0 && Q !== 1) {
        if (P < smallestStartingPos) {
          smallestStartingPos = P;
          averageCollision = true;
        }
      } else if (avg < minimalAverage) {
        minimalAverage = avg;
        smallestStartingPos = P;
        averageCollision = false;
      }
    }
  }

  return parseInt(smallestStartingPos);
}
