// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str){
  let pig = str.split(' ')

  for(i = 0; i < pig.length; i++) {
    if(/^[a-zA-Z]/.test(pig[i])) {
      let temp = pig[i].split('')
      temp.push(temp[0])
      temp.shift()
      pig[i] = temp.join('') + 'ay'      
    }
  }
  return pig.join(' ')
}