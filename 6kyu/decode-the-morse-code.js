
// In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.

// The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

// NOTE: Extra spaces before or after the code have no meaning and should be ignored.

// In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

// Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.



decodeMorse = function(morseCode){
    let morseWords = morseCode.split('   ')
    let morseLtrs = []
    let convertedWord = []
    let answer = []
    let convert = morseLtr => {
      switch(morseLtr){
          case '.-':
            return 'A';
            break;
          case '-...':
            return 'B';
            break;
          case '-.-.':
            return 'C';
            break;
          case '-..':
            return 'D';
            break;
          case '.':
            return 'E';
            break;
          case '..-.':
            return 'F';
            break;
          case '--.':
            return 'G';
            break;
          case '....':
            return 'H';
            break;
          case '..':
            return 'I';
            break;
          case '.---':
            return 'J';
            break;
          case '-.-':
            return 'K';
            break;
          case '.-..':
            return 'L';
            break;
          case '--':
            return 'M';
            break;
          case '-.':
            return 'N';
            break;
          case '---':
            return 'O';
            break;
          case '.--.':
            return 'P';
            break;
          case '--.-':
            return 'Q';
            break;
          case '.-.':
            return 'R';
            break;
          case '...':
            return 'S';
            break;
          case '-':
            return 'T';
            break;
          case '..-':
            return 'U';
            break;
          case '...-':
            return 'V';
            break;
          case '.--':
            return 'W';
            break;
          case '-..-':
            return 'X';
            break;
          case '-.--':
            return 'Y';
            break;
          case '--..':
            return 'Z';
            break;
      }
    }
    for(i = 0; i < morseWords.length; i++){
      morseLtrs.push(morseWords[i].split(' '))
    }
    for(i = 0; i < morseWords.length; i++){
      for(j = 0; j < morseLtrs[i].length; j++){
        console.log(morseLtrs[i][j])
        convertedWord.push(convert(morseLtrs[i][j]))
      }
      answer.push(convertedWord.join(''))
      convertedWord = []
    }
    return answer.join(' ')
  }