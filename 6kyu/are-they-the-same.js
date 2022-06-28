// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2){
    if (array1 === null || array2 === null ){
      return false;
    } else {
      for (i = 0; i < array1.length; i++){
        array1[i] = array1[i] * array1[i];
      }
      array1.sort(function(a, b){return a - b});
      array2.sort(function(a, b){return a - b});    
    }
  
  
  
    for (i = 0; i < array1.length; i++){
      if (array1[i] != array2[i]){
        return false;
      } else if (i + 1 === array1.length && array1[i] === array2[i]) {
        return true; 
      } else if (array1[i] === array2[i]){
        
      }
    }
    return true;
  }