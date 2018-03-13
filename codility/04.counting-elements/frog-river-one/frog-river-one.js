function solution(X, A) {
  let time = -1;
  let path = [];
  let steps = X;

  for (let i = 0; i < A.length; ++i) {
    let pos = A[i];

    if (!path[pos]) {
      path[pos] = true;
      steps--;
    }

    if (steps == 0) {
      time = i;
      return time;
    }
  }

  return time;
}
