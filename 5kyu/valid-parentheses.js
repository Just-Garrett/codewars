// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parens) {
    let answer = parens.replace(`()`, '')
    for(i = 0; i < parens.length / 2; i++) {
      answer = answer.replace(`()`, '')
    }
    if (answer.length === 0) {return true}
    return false
  }