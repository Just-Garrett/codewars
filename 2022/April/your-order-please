// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.



function order(words){
  let ord = words.split(' ')
  let answer = []
  for(i = 0; i < ord.length + 1; i++){
    for(j = 0; j < ord.length; j++) {
      if(ord[j].includes(`${i}`)) {
        answer.push(ord[j])
      }
    }
  }
  return answer.join(' ')
}