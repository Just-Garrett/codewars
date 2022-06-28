// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(string){
    let stringArr = string.split(' ')
    let currentWord = []
    let backward = []
    for (i = 0; i < stringArr.length; i++) {
      if (stringArr[i].length >= 5) {
        currentWord = stringArr[i].split('')
        for(j = 0; j < stringArr[i].length; j++){
          backward += currentWord.pop();
        }
        stringArr[i] = backward
        backward = []
      }
    }
    return(stringArr.join(' '))
  }