function solution(A, B, K) {
  let result = parseInt(B / K) - parseInt(A / K);
  if (A % K === 0) result++;
  return result;
}
