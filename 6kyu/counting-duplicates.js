// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
    let txt = text.toLowerCase().split('').sort()
    let arr = []
    for (i = 0; i < text.length; i++) {
      if (txt[i] === txt[i + 1]) {arr += txt[i]}
    }
    let dup = [...new Set(arr)]
    return dup.length
  }