// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.


function isPrime(num) {
    let primes = [2, 3, 5, 7]
    let count = 1
    let test = 0
    if(num <= 1){return false}
    if(num === 2 || num === 3){return true}
    if(num % 2 === 0){return false}
    while(test <= 43){
        test = 6 * count - 1
        for(i = 0; i < primes.length; i++){
        if(test % primes[i] === 0){break}
        else if(test % primes[i] != 0 && i === primes.length - 1){
            if(test === num){return true}
            primes.push(test)
        }
        }
        test = 6 * count + 1
        for(i = 0; i < primes.length; i++){
        if(test % primes[i] == 0){break}
        else if(test % primes[i] != 0 && i === primes.length - 1){
            if(test === num){return true}
            primes.push(test)
        }
        }
        count++
    }
    if(primes.includes(num)){return true}
    else{return false}
 }