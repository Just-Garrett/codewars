// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
    let str = string.toLowerCase().split(' ').join('').split('').sort().join('')
    if(str.length < 26){return false}
    console.log(str)
    for(i = str.indexOf('a'); i < str.length; i++){
      if(str[i] == 'z'){return true}
      else if(str[i] != str[i+1] && str.charCodeAt(i) + 1 != str.charCodeAt(i + 1)){return false}
    }
    return false
  }