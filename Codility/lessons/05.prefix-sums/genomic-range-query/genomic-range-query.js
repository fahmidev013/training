// Result: Corectness: 100% | Performance: 0% :(

function solution(S, P, Q) {
  const NUCLEOTIDES = {
    'A': 1,
    'C': 2,
    'G': 3,
    'T': 4
  };

  const M = P.length;
  let result = [];

  for (let i = 0; i < M; i++) {
    let min;
    let query = S.substring(P[i], Q[i]) + S[Q[i]];
    if (P[i] === Q[i] && !query) {
      query = S[P[i]];
      result.push(NUCLEOTIDES[query]);
      continue;
    }

    for (let char of query) {
      const impact = NUCLEOTIDES[char];
      if (!min || impact < min) min = impact;
      if (impact === 1) break;
    }
    result.push(min);
  }

  return result;
}