// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str){
    let pairs = [];
    let count = 0;
    if(str.length === 0) {
      return pairs;
    } else if(str.length % 2 != 0) {
      str += '_';
      for(i = 0; i < str.length; i += 2){
        pairs.push(str[i] + str[i + 1])
      }
    } else {
      for(i = 0; i < str.length; i += 2){      
        pairs.push(str[i] + str[i + 1])
      }
    }
    return pairs
  }