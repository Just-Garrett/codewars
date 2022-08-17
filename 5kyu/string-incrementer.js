// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.


function incrementString (strng) {
    let arr = strng.split('')
    let start = ''
    let leadingZero = ''
    for(i = 0; i < arr.length; i++){
      if(isNaN(arr[i])){
        start = strng.substring(0, i + 1)
      }
    }
    let nums = arr.splice(start.length)
    let value = String(Number(nums.join('')) + 1)
    if(value.length < nums.length){
      for(i = 0; i < nums.length - value.length; i++){
        leadingZero += '0'
      }
    }
    return start.concat(leadingZero, value)
}