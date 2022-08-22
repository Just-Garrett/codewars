// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').


function toWeirdCase(string){
    let words = string.split(' ')
    let answer = []
    let temp = []
    for(i = 0; i < words.length; i++){
      let ltrs = words[i].split('')
      for(j = 0; j < ltrs.length; j++){
        if(j % 2 == 0){ltrs[j] = ltrs[j].toUpperCase()}
        if(j % 2 == 1){ltrs[j] = ltrs[j].toLowerCase()}
      }
      answer.push(ltrs.join(''))
    }
    return answer.join(' ')
  }