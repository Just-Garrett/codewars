function countSheeps(arrayOfSheep) {
    let total = 0
    for(i = 0; i < arrayOfSheep.length; i++) {
      if(arrayOfSheep[i]) {total += 1}
    }
    return total
  }