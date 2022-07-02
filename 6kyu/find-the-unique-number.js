// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// It’s guaranteed that array contains at least 3 numbers.

function findUniq(arr) {
    arr.sort((a, b) => a - b)
    if(arr[0] == arr[1]) {
      return arr[arr.length - 1]
    } else {
      return arr[0]
    }
  }