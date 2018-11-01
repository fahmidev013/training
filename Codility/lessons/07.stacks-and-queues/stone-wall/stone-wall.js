// https://app.codility.com/demo/results/training958KSR-EWY/

function solution(H) {
  var gapsStack = [];
  var lowestInStack;
  var cuboids = 0;
  var heightsExistance = {};

  for (var i = 0; i < H.length; i++) {
    var currentHeight = H[i];
    var lastInGapsStack = gapsStack.length > 0 ? gapsStack[gapsStack.length - 1] : null;

    if (cuboids === 0) {
      heightsExistance[currentHeight] = true;
      gapsStack.push(currentHeight);
      lowestInStack = currentHeight;
      cuboids++;
      continue;
    }

    if (lastInGapsStack) {
      if (currentHeight === lastInGapsStack) {
        gapsStack.push(currentHeight);
      } else if (currentHeight > lastInGapsStack) {
        cuboids++;
        heightsExistance[currentHeight] = true;
        gapsStack.push(currentHeight);
      } else {
        if (currentHeight < lowestInStack) {
          cuboids++;
          gapsStack = [];
          heightsExistance = {};
          gapsStack.push(currentHeight);
          heightsExistance[currentHeight] = true;
          lowestInStack = currentHeight;
        } else if (currentHeight >= lowestInStack) {
          if (!heightsExistance[currentHeight]) {
            cuboids++;
          }
          gapsStack.push(currentHeight);
        }
      }
    }
  }

  return cuboids;
}