class SmallestIntegerFinder {
    findSmallestInt(args) {
      let order = args.sort(function(a, b){return a-b});
      return order[0]
    }
  }