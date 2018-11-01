// https://app.codility.com/demo/results/training9YNEWT-RBX/

function gcd(a, b, res) {
  if (a == b) {
    return res * a;
  } else if ((a % 2 == 0) && (b % 2 == 0)) {
    return gcd(a / 2, b / 2, 2 * res);
  } else if (a % 2 == 0) {
    return gcd(a / 2, b, res);
  } else if (b % 2 == 0) {
    return gcd(a, b / 2, res);
  } else if (a > b) {
    return gcd(a - b, b, res);
  } else {
    return gcd(a, b - a, res);
  }
}

function lcm(a, b) {
  return (a * b) / gcd(a, b, 1);
}

function solution(N, M) {
  var x = gcd(N, M, 1);

  return N / x;
}