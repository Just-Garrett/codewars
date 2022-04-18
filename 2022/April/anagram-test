// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

function anagrams(word, words) {
  let arr = []
  for (i = 0; i < words.length; i++) {
    if (word.split('').sort().join('') == words[i].split('').sort().join('')) {
      arr.push(words[i])
    }
  }
  return arr
}