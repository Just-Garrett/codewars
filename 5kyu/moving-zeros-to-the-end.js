// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
  let count = arr.length
  for(i = 0; i < count; i++) {
    if(arr[i] === 0) {
      arr.splice(i, 1)
      arr.push(Number('0'))
      i--
      count--
    }
  }
  return arr
}