// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers

var maxSequence = function(arr){
    let highest = 0
    while(arr[0] <= 0){arr.splice(0, 1)}
    while(arr[arr.length - 1] <= 0){arr.splice(-1, 1)}
    console.log(arr)
    for(i = 0; i < arr.length; i++){
      for(j = 0; j < arr.length + 1; j++){
        let current = arr.slice(i, j).reduce((x, y) => x + y, 0)
        if(current > highest) {highest = current}
      }
    }
    return highest
  }