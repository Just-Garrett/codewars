// Given the string representations of two integers, return the string representation of the sum of those integers.

 function sumStrings(a,b) {
    let aArr = a.split('');
    let bArr = b.split('');
    let currentNumber = 0;
    let remainder = 0;
    let finalArray = [];
    let converter = '';
    let answer;
    
    if (a.length < b.length) {
      for (i = a.length; i < b.length; i++){
        aArr.unshift('0'); }
    } else if (b.length < a.length) {
      for (i = b.length; i < a.length; i++){
        bArr.unshift('0'); }
    }
    
    for (i = 0; i < aArr.length; i++) {
      currentNumber = remainder + Number(aArr[aArr.length - 1 - i]) + Number(bArr[bArr.length - 1 - i]);
      if (currentNumber / 10 >= 1) {
        converter = String(currentNumber);
        finalArray.unshift(converter[1]);
        remainder = 1;
        console.log(finalArray)
      } else {
        finalArray.unshift(String(currentNumber));
        remainder = 0
        console.log(finalArray)
      }
    }
    
    if (remainder == 1) {
      finalArray.unshift('1')
    }
    
    if (finalArray[0] == 0) {
      finalArray.shift();
    }
    
    return finalArray.join('')
  }