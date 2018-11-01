function solution(S) {
  var arr = S.split('');
  var stack = [];
  var closingBracket = {
    '[': ']',
    '{': '}',
    '(': ')'
  };

  for (var i = 0; i < arr.length; i++) {
    var ch = arr[i];

    if (ch === '[' || ch === '{' || ch === '(') {
      stack.push(ch);
    } else {
      var lastClosing = stack[stack.length - 1];
      if (lastClosing && ch === closingBracket[lastClosing]) {
        stack.pop();
      } else {
        return 0;
      }
    }
  }

  if (stack.length === 0) return 1;
  return 0;
}