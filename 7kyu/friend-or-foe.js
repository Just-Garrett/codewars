function friend(friends){
    function fourLtrs(f) {
      if(f.length === 4) {return f}
    }
    return friends.filter(fourLtrs)
  }