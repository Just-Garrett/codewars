function validBraces(braces){
    let answer = braces.replace(`()`, '').replace(`{}`, '').replace(`[]`, '')
    for(i = 0; i < braces.length / 2; i++) {
      answer = answer.replace(`()`, '').replace(`{}`, '').replace(`[]`, '')
    }
    if (answer.length === 0) {return true}
    return false
  }