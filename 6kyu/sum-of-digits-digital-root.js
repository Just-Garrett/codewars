// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
    let addN = 0;
    let strN = String(n);
    for (i = 0; i < strN.length; i++){
      addN += Number(strN[i]);
    }
    if (addN < 10) {
      return addN;
    } else {
      return digital_root(addN);
    }
  }