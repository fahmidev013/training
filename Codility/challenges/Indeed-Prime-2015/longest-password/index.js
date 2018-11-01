// https://app.codility.com/demo/results/trainingXGNHZZ-3KT/

function isValidPassword(word) {
  var characters = word.split('');
  var lettersCount = 0;
  var digitsCount = 0;
  
  for (var i = 0; i < characters.length; i++) {
      var ch = characters[i];
      var code = word.charCodeAt(i);
      if (code >= 48 && code <= 57) {
          digitsCount++;
      } else if ((code >= 65 && code <= 90) || (code >= 97  && code <= 122)) {
          lettersCount++;
      } else {
          return false;
      }
  }
  if (lettersCount % 2 === 0 && digitsCount % 2 === 1) {
      return true;
  }
  
  return false;
}

function solution(S) {
  var words = S.split(' ');
  var N = words.length;
  var maxLength = -1;
  
  for (var i = 0; i < N; i++) {
      var word = words[i];
      if (isValidPassword(word) && word.length > maxLength) {
          maxLength = word.length;
      }
  }
  
  return maxLength;
}