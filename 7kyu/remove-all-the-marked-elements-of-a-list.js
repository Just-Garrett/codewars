// Define a method/function that removes from a given array of integers all the values contained in a second array.

Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(x => {
      for(i = 0; i < values_list.length; i++){
        if(x == values_list[i]){return false}
      }
      return true
    })
}