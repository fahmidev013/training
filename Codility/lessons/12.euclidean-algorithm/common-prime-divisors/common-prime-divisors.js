// https://app.codility.com/demo/results/trainingZZ8K4K-YSD/

function gcd(p, q) {
  if (q == 0)
    return p;
  return gcd(q, p % q);
}

function hasSameFactors(p, q) {
  if (p == 0 && q == 0) {
    return true;
  }

  var denom = gcd(p, q);
  var flag = true;

  while (p != 1) {
    var pGcd = gcd(p, denom);
    if (pGcd === 1) {
      flag = false;
      break;
    }
    p /= pGcd
  }
  if (flag) {
    while (q != 1) {
      qGcd = gcd(q, denom)
      if (qGcd === 1) {
        flag = false;
        break;
      }
      q /= qGcd;
    }
    if (flag) {
      return true;
    }
  }

  return false;
}

function solution(A, B) {
  var Z = A.length;
  var primeDivisorsMatchTotal = 0;

  for (var i = 0; i < Z; i++) {
    if (hasSameFactors(A[i], B[i])) {
      primeDivisorsMatchTotal++;
    }
  }

  return primeDivisorsMatchTotal;
}

console.log(solution([15, 10, 3], [75, 30, 5]));