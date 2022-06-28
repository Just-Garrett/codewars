// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

snail = function(array) {
    if (array.length < 2) {return array[0]}
    let totalLength = array.length * array.length
    let snlArr = []
    while (snlArr.length < totalLength){
      let height = array.length
      // Adds each element of the first array. Then removes the first array.
      for (i = 0; i < array[0].length; i++){
        snlArr.push(array[0][i])
      }
      array.shift()
  
      // Adds the last element in each array. Then deletes that element
      for (i = 0; i < height - 1; i++){
        snlArr.push(array[i][height - 1])
        array[i].length -= 1
      }
  
      // Adds the last element of the last array and moves forward through each element of that array. Then deletes the last array
      for (i = 0; i < array.length; i++) {
        snlArr.push(array[array.length - 1][array.length - 1 - i])
      }
      array.pop()
      height = array.length
      for (i = 0; i < height; i++){
        snlArr.push(array[array.length - 1 - i][0])
        array[array.length - 1 - i].shift()
      }
    }
  
    return snlArr 
  }