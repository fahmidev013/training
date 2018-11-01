function solution(S) {
  var characters = S.split('');
  var properlyNestedStack = [];
  var map = {
    '(': ')',
  };

  characters.forEach(function (ch, index) {

  });

  for (var i = 0; i < characters.length; i++) {
    var ch = characters[i];
    if (ch === '(') {
      properlyNestedStack.push(ch);
    } else {
      var lastProperlyNestedChar = properlyNestedStack[properlyNestedStack.length - 1];

      if (lastProperlyNestedChar && ch === map[lastProperlyNestedChar]) {
        properlyNestedStack.pop();
      } else {
        return 0;
      }
    }
  }

  if (properlyNestedStack.length > 0) {
    return 0;
  } else {
    return 1;
  }
}