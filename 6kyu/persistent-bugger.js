// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let n = Array.from(num.toString()).map(Number);
    let count = 0
    while (n.length > 1) {
      let total = n[0]
      for (i = 1; i < n.length; i++) {
        total *= n[i] 
      }
      count += 1
      n = Array.from(total.toString()).map(Number);
    }
    return count
  }