// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    numbers.unshift('(');
    numbers.splice(4, 0, ") ");
    numbers.splice(8, 0, '-');
    let answer = numbers.join('');
    return answer
  } 