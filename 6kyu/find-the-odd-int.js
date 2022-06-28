// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) { 
    if (A.length === 1) {return A[0]}
    A.sort(function(a, b){return a-b}); 
    let count = 1
    for (i = 0; i < A.length; i++) {
      if (A[i] === A[i + 1]){
        count++;
      } else if (A[i] != A[i + 1] && count % 2 === 0) {
        count = 1;
      } else {
        return A[i];
      }
    }
  }