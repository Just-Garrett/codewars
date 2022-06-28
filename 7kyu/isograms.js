// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
    let ltrs = str.toLowerCase().split('').sort()
    for (i = 0; i < ltrs.length; i++) {
      if (ltrs[i] === ltrs[i + 1]) {return false}
    }
    return true
  }