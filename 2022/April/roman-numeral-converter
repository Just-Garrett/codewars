// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

function solution(number){
  let answer = ''
  while(number / 1000 >= 1) {
    answer += 'M'
    number -= 1000
  }
  while(number / 900 >= 1) {
    answer += 'CM'
    number -= 900
  }
  while(number / 500 >= 1) {
    answer += 'D'
    number -= 500
  }
  while(number / 400 >= 1) {
    answer += 'CD'
    number -= 400
  }
  while(number / 100 >= 1) {
    answer += 'C'
    number -= 100
  }
  while(number / 90 >= 1) {
    answer += 'XC'
    number -= 90
  }
  while(number / 50 >= 1) {
    answer += 'L'
    number -= 50
  }
  while(number / 40 >= 1) {
    answer += 'XL'
    number -= 40
  }
  while(number / 10 >= 1) {
    answer += 'X'
    number -= 10
  }
  while(number / 9 >= 1) {
    answer += 'IX'
    number -= 9
  }
  while(number / 5 >= 1) {
    answer += 'V'
    number -= 5
  }
  while(number / 4 >= 1) {
    answer += 'IV'
    number -= 4
  }
  while(number / 1 >= 1) {
    answer += 'I'
    number -= 1
  }
  if(number === 0) {return answer}
}