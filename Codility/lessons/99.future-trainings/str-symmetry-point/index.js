// https://app.codility.com/demo/results/trainingB5AJ66-R6Z/

function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

function solution(S) {
  var characters = S.split('');
  var N = characters.length;
  if (N === 0) return -1;
  if (N === 1 || N === 2) return 0;
  var index = -1;

  for (var i = 1; i < N; i++) {
    var leftSiblingStart = i - 1;
    var rightSiblingEnd = i + 1;

    if (characters[leftSiblingStart] === characters[rightSiblingEnd]) {
      index = i;
      break;
    }
  }

  return index;
}