// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    let answer = ''
    for(i = 0; i < message.length; i++) {
      let num = message[i].charCodeAt()
      // if letter is an uppercase charcode
      if (num >= 65 && num <= 90) {
        // if adding 13 won't leave the range, add it to answer
        if (num + 13 <= 90) {answer += String.fromCharCode(num + 13)}
        // else get the difference beyond 90 and start from 64 again.
        else {answer += String.fromCharCode(((num + 13) % 90) + 64)}
      } else if (num >= 97 && num <= 122) {
        if (num + 13 <= 122) {answer += String.fromCharCode(num + 13)}
        else {answer += String.fromCharCode(((num + 13) % 122) + 96)}
      } else answer += message[i]
    }
    return answer
  }