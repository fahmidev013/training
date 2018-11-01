// https://app.codility.com/demo/results/trainingH4SK97-AW3/

function fibonacci(n) {
  var fib = new Array(n).fill(0);
  var fibSet = new Set();
  fib[1] = 1;
  fibSet.add(1);

  for (var i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    fibSet.add(fib[i]);
  }

  return fibSet;
}

function solution(A) {
  var N = A.length;
  var fib = fibonacci(N + 2);
  var minimumJumps = 0;
  var frogPosition = -1;

  if (N === 0) return 1;

  var leafs = [];
  for (var i = 0; i < N; i++) {
    var leaf = A[i];
    if (leaf === 1) {
      leafs.push({
        index: i,
        value: i + 1
      });
    }
  }
  leafs.push({
    index: null,
    value: N + 1
  });

  var i = leafs.length - 1;
  while (leafs[i]) {
    var leaf = leafs[i];
    if (fib.has(leaf.value)) {
      if (leaf.index === null) {
        minimumJumps++;
        break;
      }

      frogPosition = leaf.index;
      minimumJumps++;

      // Re-calculate leafs lengths
      var recalculatedLeafs = [];
      leafs.forEach((l, idx) => {
        if (l.index > frogPosition) {
          recalculatedLeafs.push({
            index: l.index,
            value: l.index - frogPosition
          });
        } else if (l.index === null) {
          recalculatedLeafs.push({
            index: null,
            value: l.value - leaf.value
          });
        }
      });

      leafs = Object.assign([], recalculatedLeafs);
      i = leafs.length - 1;
    } else if (leafs.length > 0) {
      i--;
    } else {
      return -1;
    }
  }

  if (minimumJumps === 0) {
    return -1;
  }

  return minimumJumps;
}

/**
function fibonacci(n) {
  var fib = new Array(n).fill(0);
  fib[1] = 1;

  for (var i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  
  return fib; // or fib[n];
}
 */