// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.



function duplicateEncode(word){
  let w = word.toLowerCase()
  function replaceAll(input, find, replace) {
    for(j = 0; j < input.length; j++) {
      if(input.includes(find)) {input = input.replace(find, replace)}
    }
    return input
  }
  w = replaceAll(w, '(', `%`)
  w = replaceAll(w, ')', `^`)  
  for(i = 0; i < w.length; i++) {
    if(w.indexOf(w[i]) !== w.lastIndexOf(w[i])){
      w = replaceAll(w, w[i], ')')      
    } else {
      w = w.replace(w[i], '(')
    }
    console.log(w)
  }
  return w
}
