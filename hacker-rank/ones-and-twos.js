function calculateExpression(exp) {
  var result = 0;

  if (exp === '1') {
    return 1;
  } else if (exp === '2') {
    return 2;
  }

  var toMultiply = exp
    .split('*')
    .map(function (tm) {
      return tm.split('+');
    });

  // console.log('toMultiply: ', JSON.stringify(toMultiply));

  for (var i = 0; i < toMultiply.length - 1; i++) {
    var currentChunk = toMultiply[i];
    var nextChunk = toMultiply[i + 1];
    var x = parseInt(currentChunk.pop());
    var y = parseInt(nextChunk.shift());
    var newChunk = [x * y];
    // console.log('Multiplying ' + x + '*' + y + ' = ' + x * y);
    var elementsToRemove = 0;
    if (currentChunk.length > 0) {
      if (nextChunk.length === 0) {
        elementsToRemove = 1;
      }
      toMultiply.splice(i + 1, elementsToRemove, newChunk);
      i++;
    } else {
      if (nextChunk.length === 0) {
        elementsToRemove = 2;
        toMultiply.splice(i, elementsToRemove, newChunk);
        i--;
      }
      else {
        elementsToRemove = 1;
        toMultiply.splice(i, elementsToRemove, newChunk);
      }
    }
  }

  var toSum = [].concat.apply([], toMultiply);

  for (var i = 0; i < toSum.length; i++) {
    result += parseInt(toSum[i]);
  }

  // console.log('Result: ', result);

  return result;
}

function processData(input) {
  var lines = input.split('\n');
  var T = lines[0];
  for (var i = 1; i <= T; i++) {
    var A = parseInt(lines[i].split(' ')[0]);
    var B = parseInt(lines[i].split(' ')[1]);
    console.log('A: ', A);
    console.log('B: ', B);
    /** TODO:
     * 1. Create an array with A times 1s
     * 2. Create an array with B times 2s
     * 3. Create an array with all the possible 1s combinations from the arrA: ex. A=3 -> 1, 1+1, 1+1+1, 1*1, 1*1*1
     * 4. Create an array with all the possible 2s combinations from the arrB: ex. B=2 -> 2, 2+2, 2*2
     * 5. Create an array with string expressions adding and multiplying each of the values in the two arrays: 1+2, 1*2, 1+2+2, 1+2*2 etc.
     * 6. Calculate each expression in the array and then console.log the highest value
     */
    var arrA = [];
    var arrB = [];

    for (var j = 1; j <= A; j++) {
      if (j == 1) {
        arrA.push('1');
      } else {
        var addExp = '1';
        for (var k = 0; k < j - 1; k++) {
          addExp += '+1'
        }
        arrA.push(addExp);

        var multiExp = '1';
        for (var k = 0; k < j - 1; k++) {
          multiExp += '*1'
        }
        arrA.push(multiExp);
      }
    }

    for (var j = 1; j <= B; j++) {
      if (j == 1) {
        arrB.push('2');
      } else {
        var addExp = '2';
        for (var k = 0; k < j - 1; k++) {
          addExp += '+2'
        }
        arrB.push(addExp);
        var multiExp = '2';
        for (var k = 0; k < j - 1; k++) {
          multiExp += '*2'
        }
        arrB.push(multiExp);
      }
    }

    console.log('Array A: ', JSON.stringify(arrA));
    console.log('Array B: ', JSON.stringify(arrB));

    var expressions = [];

    if (arrA.length === 0) {
      expressions = arrB;
    } else if (arrB.length === 0) {
      expressions = arrA;
    } else if (arrA.length >= arrB.length) {
      for (var j = 0; j < arrA.length; j++) {
        expressions.push(arrA[j]);
        for (var k = 0; k < arrB.length; k++) {
          expressions.push(arrB[k]);
          expressions.push(arrA[j] + '+' + arrB[k]);
          expressions.push(arrA[j] + '*' + arrB[k]);
        }
      }
    } else {
      for (var j = 0; j < arrB.length; j++) {
        expressions.push(arrB[j]);
        for (var k = 0; k < arrA.length; k++) {
          expressions.push(arrA[k]);
          expressions.push(arrB[j] + '+' + arrA[k]);
          expressions.push(arrB[j] + '*' + arrA[k]);
        }
      }
    }

    console.log('Expressions: ', expressions);
    var uniqueResultExpression = {};
    for (var j = 0; j < expressions.length; j++) {
      // console.log('CalculateExpression: ', expressions[j]);
      var evaluation = calculateExpression(expressions[j]);
      // console.log('Evaluation: ', evaluation);
      if (uniqueResultExpression[evaluation] && uniqueResultExpression[evaluation].length) {
        uniqueResultExpression[evaluation].push([expressions[j]]);
      } else {
        uniqueResultExpression[evaluation] = [expressions[j]];
      }
    }

    console.log(JSON.stringify(uniqueResultExpression));
    console.log(Object.keys(uniqueResultExpression).length);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});