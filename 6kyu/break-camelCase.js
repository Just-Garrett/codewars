// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {
    let spaced = '';
      for (i = 0; i < string.length; i++){
        if (string[i] === string[i].toUpperCase()) {
          spaced += ' ' + string[i];
        } else {
          spaced += string[i];
        }
      }
    return spaced;
  }