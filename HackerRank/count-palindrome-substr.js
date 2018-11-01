function substrCount(n, s) {
  var chars = s.split('');
  var count = 0;
  if (n === 1) {
    return 1;
  }
  count += n;

  for (var i = 0; i < n; i++) {
    var current = chars[i];
    if (i > 0 && chars[i - 1] !== current && chars[i - 1] === chars[i + 1]) {
      count++;
    } else {
      var k = i + 1;
      while (k < n) {
        if (chars[k] === current) {
          count++;
        } else {
          break;
        }
        k++;
      }
    }
  }

  return count;
}
