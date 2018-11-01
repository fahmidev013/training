function solution(A, B) {
  var N = A.length;
  var livingStack = [];

  for (var i = N - 1; i >= 0; i--) {
    var fish = {
      strength: A[i],
      direction: B[i]
    };

    if (fish.direction === 0) {
      //console.log('fish direction is upstream! pushing to the stack', fish);
      livingStack.push(Object.assign({}, fish));
    } else {
      //console.log('fish direction is downstream!', fish);
      if (livingStack.length > 0) {
        var lastFishInStack = livingStack.pop();
        //console.log('there are living fishes in the living stack! the last one: ', lastFishInStack, livingStack);
        if (lastFishInStack.direction === 1) {
          //console.log('last fish is also going downstream. pushing both to the stack..');
          livingStack.push(Object.assign({}, lastFishInStack));
          livingStack.push(Object.assign({}, fish));
          //console.log('living stack: ', livingStack);
        } else {
          //console.log('last fish goes upstream. scary moment');
          if (lastFishInStack.strength > fish.strength) {
            //console.log('last fish vs fish: 1:0');
            livingStack.push(Object.assign({}, lastFishInStack));
            //console.log('living stack: ', livingStack);
          } else {
            while (lastFishInStack && lastFishInStack.strength < fish.strength) {
              //console.log('starting the loop');
              if (lastFishInStack.direction === 1) {
                //console.log('last fish is going downstream...', lastFishInStack);
                livingStack.push(Object.assign({}, lastFishInStack));
                livingStack.push(Object.assign({}, fish));
                lastFishInStack = null;
                //console.log('living stack: ', livingStack);
                break;
              } else {
                //console.log('last fish vs fish: 0:1');
                //console.log('destroying the last fish and picking up the next one. last fish: ', lastFishInStack);
                var nextLivingFish = livingStack.pop();
                if (nextLivingFish) {
                  //console.log('new last fish exist... setting it to lastFish: ', nextLivingFish);
                  //console.log('fish: ', fish);
                  lastFishInStack = Object.assign({}, nextLivingFish);
                } else {
                  //console.log('no more fishes in the stack... add the new fish as winner: ', fish);
                  livingStack.push(Object.assign({}, fish));
                  lastFishInStack = null;
                  //console.log('living stack: ', livingStack);
                  break;
                }
              }
            }
            if (lastFishInStack) {
              //console.log('adding to the  stack the leftovers...');
              if (lastFishInStack.direction === fish.direction) {
                livingStack.push(Object.assign({}, lastFishInStack));
                livingStack.push(Object.assign({}, fish));
              } else {
                livingStack.push(Object.assign({}, lastFishInStack));
              }

            }
          }
        }
      } else {
        //console.log('living stack is empty... pushing the fish: ', fish);
        livingStack.push(Object.assign({}, fish));
      }
    }
  }
  //console.log('final living stack: ', livingStack);
  return livingStack.length;
}

var result = solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]);
// var result = solution([3, 2, 1, 7, 4, 6, 5, 0], [1, 0, 0, 1, 0, 1, 0, 0]);
console.log('Result: ', result);