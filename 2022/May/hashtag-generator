// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag (str) {
  let arr = str.split(' ')
  if(arr.join('') == '') {return false}

  for(i = 0; i < arr.length; i++) {
    if(arr[i] != '') {
      let word = arr[i].split('')
      word[0] = word[0].toUpperCase()
      arr[i] = word.join('')
      console.log(arr)      
    }
  }  
  arr.unshift('#')
  if(arr.join('').length > 140) {return false}
  return arr.join('')
}