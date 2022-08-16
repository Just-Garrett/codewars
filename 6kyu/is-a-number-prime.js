// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.


function isPrime(num) {
    if(num <= 1){return false}
    if(num <= 3){return true}
    if(num % 2 === 0 || num % 3 === 0){return false}
    for(i = 5; i * i <= num; i += 6){
      if(num % i === 0 || num % (i + 2) === 0){return false}
    }
    return true
}