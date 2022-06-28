// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    let x = 0
    let o = 0
    for (i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === 'x') { x += 1}
      if (str[i].toLowerCase() === 'o') { o += 1}
    } 
  return x === o
}