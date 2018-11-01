// https://app.codility.com/demo/results/training3XDC9P-3EW/

function solution(K, C, D) {
  // K = washing machine capacity

  var cleanSocks = C.sort((a, b) => a - b);
  var dirtyCount = D.length;
  var dirtyCountByColor = {};
  D.forEach((x) => dirtyCountByColor[x] === undefined ? dirtyCountByColor[x] = 1 : dirtyCountByColor[x]++)

  var maxNumberOfPairs = 0;
  var pair = 0;
  var last = null;

  while (cleanSocks.length > 0) {
    if (!last) {
      last = cleanSocks.shift();
    }

    if (last === cleanSocks[0]) {
      maxNumberOfPairs++;
      cleanSocks.shift();
      last = null;
    } else {
      if (dirtyCountByColor[last] > 0) {
        dirtyCountByColor[last]--;
        dirtyCount--;
        maxNumberOfPairs++;
        K--;
        last = null;
      }
    }
  }

  if (dirtyCount > 0 && K > 0) {
    var dirtySocks = Object.keys(dirtyCountByColor);
    dirtySocks.forEach((ds) => {
      if (dirtyCountByColor[ds] >= 2) {
        var possiblePairsToSubtract = parseInt(dirtyCountByColor[ds] / 2);
        if (K > possiblePairsToSubtract * 2) {
          maxNumberOfPairs += possiblePairsToSubtract;
          K -= possiblePairsToSubtract * 2;
        } else {
          maxNumberOfPairs += parseInt(K / 2);
          K = K % 2;
        }
      }
    });
  }

  return maxNumberOfPairs;
}