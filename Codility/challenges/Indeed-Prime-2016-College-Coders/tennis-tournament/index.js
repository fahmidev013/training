// https://app.codility.com/demo/results/training3UQ783-UUY/

function solution(P, C) {
  var maxPlayers = C * 2;
  var maxGames = 0;

  if (maxPlayers <= P) {
    return C;
  } else {
    return (P - P % 2) / 2;
  }

  return maxGames;
}