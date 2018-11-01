// https://app.codility.com/demo/results/trainingM77WQU-UQ6/

function solution(A, X) {
  var N = A.length;
  var array = A.sort((a, b) => a - b);
  var count = {};
  var distinct = [];
  var numberOfWays = 0;
  var counter = 0;
  var last = null;

  array.forEach((x, i) => {
    if (!last) {
      last = x;
    } else if (x !== last || i === N - 1) {
      if (i === N - 1) {
        counter++;
      }

      if (counter % 2 === 0) {
        count[last] = counter;
        distinct.push(last);
      }
      counter = 0;
      last = x;
    }
    counter++;
  });

  var pairs = {};

  for (var i = 0; i < distinct.length; i++) {
    var j = 0;
    while (j < distinct.length) {
      if (distinct[i] * distinct[j] >= X) {
        if (distinct[i] === distinct[j]) {
          if (count[distinct[i]] >= 4 && !pairs[`${i},${j}`]) {
            numberOfWays++;
            pairs[`${i},${j}`] = true;
          }
        } else {
          if (!pairs[`${i},${j}`] && !pairs[`${j},${i}`]) {
            numberOfWays++;
            pairs[`${i},${j}`] = true;
            pairs[`${j},${i}`] = true;
          }
        }
      }
      j++;
    }
  }

  if (numberOfWays > 1000000000) {
    return -1;
  }

  return numberOfWays;
}