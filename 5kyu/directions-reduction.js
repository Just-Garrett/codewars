// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

function dirReduc(arr){
  for(i = 0; i < arr.length; i++) {
    if((arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH') || (arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH') || (arr[i] === 'EAST' && arr[i + 1] === 'WEST') || (arr[i] === 'WEST' && arr[i + 1] === 'EAST')) {
      arr.splice(i, 2)
      i -= 2
    }
  }
  return arr
}