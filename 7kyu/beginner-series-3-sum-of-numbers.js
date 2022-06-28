function getSum( a,b ){
    if ( a === b) {return a}
    let total = 0
    let higher = (a < b) ? b : a
    let lower = (a < b) ? a : b
    for (i = lower; i <= higher; i++) {
      total += i;
    }
    return total
  }