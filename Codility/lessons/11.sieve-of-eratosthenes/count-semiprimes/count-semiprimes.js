// https://app.codility.com/demo/results/trainingK5PVY3-KXG/

function solution(N, P, Q) {
  // Finding all the primes (Sieve of Eratosthenes)
  var sieve = new Array(N + 1);
  sieve[0] = sieve[1] = false;

  var i = 2;
  while (i * i <= N) {
    if (sieve[i] === undefined) {
      var k = i * i;
      while (k <= N) {
        sieve[k] = false;
        k += i
      }
    }
    i += 1
  }

  // Finding all the semiprimes and storing them in a hashmap
  var semiprimes = {};
  for (var i = 0; i < sieve.length; i++) {
    if (sieve[i] === undefined) {
      for (var j = i; j < sieve.length; j++) {
        if (sieve[j] === undefined) {
          semiprimes[i * j] = true;
        }
      }
    }
  }

  var prefixSums = [0, 0, 0, 0, 1];
  for (var i = 5; i < Math.max(...Q) + 1; i++) {
    if (semiprimes[i]) {
      prefixSums[i] = prefixSums[i - 1] + 1;
    } else {
      prefixSums[i] = prefixSums[i - 1];
    }
  }

  // Count how many semiprimes are in each query by subtracting the according
  // prefix sums of semipremes  between P[k] and Q[k]
  var semiprimesCounter = [];

  var M = P.length;
  for (var i = 0; i < M; i++) {
    semiprimesCounter[i] = prefixSums[Q[i]] - prefixSums[P[i] - 1];
  }

  return semiprimesCounter;
}

console.log(solution(26, [1, 4, 16], [26, 10, 20]));

/*
  Factorization:

  function prepareArrayForFactorization(n) {
    var F = new Array(n + 1);
    var i = 2;
    while (i * i <= n) {
      if (F[i] === undefined) {
        var k = i * i;
        while (k <= n) {
          if (F[k] === undefined) {
            F[k] = i;
          }
          k += i;
        }
      }
      i += 1;
    }
    return F;
  }

  function factorize(x, F) {
    var primeFactors = [];
    while (F[x] > 0) {
      primeFactors.push(F[x]);
      x /= F[x];
    }
    primeFactors.push(x);
    return primeFactors;
  }
*/