// https://app.codility.com/demo/results/trainingHYSJAT-DXY/

function solution(A) {
  var equiLeaders = 0;

  /* TODO:
  1. Go thruough every index
  2. For each of it split the array in two halves
  3. Find the leader of each half
  4. Compare the leaders, if they exist and if they are the same equiLeaders++;
  */

  for (var i = 0; i < A.length - 1; i++) {
    var leftHalf = A.slice(0, i + 1).sort(function (a, b) { return a - b; });
    var rightHalf = A.slice(i + 1).sort(function (a, b) { return a - b; });
    var lhLeader = null;
    var lhBiggestSequenceCount = 0;
    var lhCurrentSequenceCount = 0;
    var rhLeader = null;
    var rhBiggestSequenceCount = 0;
    var rhCurrentSequenceCount = 0;

    for (var lh = 0; lh < leftHalf.length; lh++) {
      if (leftHalf.length === 1) {
        lhLeader = {
          value: leftHalf[0]
        };
        break;
      }
      if (lh === 0) {
        lhCurrentSequenceCount++;
      } else {
        if (leftHalf[lh] === leftHalf[lh - 1]) {
          lhCurrentSequenceCount++;
          if (lhCurrentSequenceCount > lhBiggestSequenceCount) {
            lhBiggestSequenceCount = lhCurrentSequenceCount;
          }
          if (lhCurrentSequenceCount > leftHalf.length / 2) {
            lhLeader = {
              value: leftHalf[lh],
            };
          }
        } else {
          if (lhCurrentSequenceCount > lhBiggestSequenceCount) {
            lhBiggestSequenceCount = lhCurrentSequenceCount;
          }
          lhCurrentSequenceCount = 1;
        }
      }
    }

    for (var rh = 0; rh < rightHalf.length; rh++) {
      if (rightHalf.length === 1) {
        rhLeader = {
          value: rightHalf[0]
        };
        break;
      }
      if (rh === 0) {
        rhCurrentSequenceCount++;
      } else {
        if (rightHalf[rh] === rightHalf[rh - 1]) {
          rhCurrentSequenceCount++;
          if (rhCurrentSequenceCount > rhBiggestSequenceCount) {
            rhBiggestSequenceCount = rhCurrentSequenceCount;
          }
          if (rhCurrentSequenceCount > rightHalf.length / 2) {
            rhLeader = {
              value: rightHalf[rh]
            };
          }
        } else {
          if (rhCurrentSequenceCount > rhBiggestSequenceCount) {
            rhBiggestSequenceCount = rhCurrentSequenceCount;
          }
          rhCurrentSequenceCount = 1;
        }
      }
    }

    if (lhLeader && rhLeader && lhLeader.value === rhLeader.value) {
      equiLeaders++;
    }
  }

  return equiLeaders;
}