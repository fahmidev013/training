function solution(A) {
  let passings = 0;
  let n = A.length;
  let P = [0];

  for (let i = n - 1; i >= 0; i--) {
    let index = n - i;
    let currentDigit = A[i];
    let currentPrefixSum = P[index - 1] + A[i];

    P[index] = currentPrefixSum;

    if (currentDigit === 0) {
      passings += currentPrefixSum;
    }
  }

  if (passings > 1000000000) return -1;

  return passings;
}