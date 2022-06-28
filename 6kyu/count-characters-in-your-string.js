// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.


function count (string) {  
    if (string == "") {
      return {};
    }
    let ltrCount = 0;
    let currentLtr = string[0];
    let sArr = string.split('');
    sArr.sort();
    
    let answer = {
      [currentLtr]: ltrCount
    }
    
    for (i = 0; i < sArr.length + 1; i++){
      if (currentLtr == '') {
        currentLtr = sArr[i];
        ltrCount = 1;      
      } else if (sArr[i] == currentLtr){
        ltrCount += 1;
      } else if (sArr !=currentLtr) {
        answer[currentLtr] = ltrCount;
        currentLtr = sArr[i];
        ltrCount = 1;
      }
    }
  
     return answer;
  }