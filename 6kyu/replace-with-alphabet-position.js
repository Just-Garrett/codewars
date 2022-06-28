// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
    let unCapped = text.toLowerCase();
    let encoded = "";
    for (i = 0; i < unCapped.length; i++){
      if (unCapped.charCodeAt(i) - 96 <= 0 || unCapped.charCodeAt(i) - 96 >= 27){
        
      } else {
      encoded += unCapped.charCodeAt(i) - 96;
      encoded += " ";    
      }
    } 
    
    return encoded.slice(0, encoded.length - 1);
  }