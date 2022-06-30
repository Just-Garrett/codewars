// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out. 

function solution(input, markers) {
    let arr = input.split('\n')
    for(i = 0; i < arr.length; i++){
      for(j = 0; j < markers.length; j++){
        if(arr[i].includes(markers[j])){
          arr[i] = arr[i].slice(0, arr[i].indexOf(markers[j]))           
        }
      }
      while(arr[i][arr[i].length - 1] === ' '){
        arr[i] = arr[i].slice(0, arr[i].length - 1)
      }
    }
    return arr.join('\n')
  };