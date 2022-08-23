// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".


function race(v1, v2, g) {
    let d1 = g
    let d2 = 0
    let perSec1 = v1 / 3600
    let perSec2 = v2 / 3600
    let countSec = 0
    for(i = 0; i < 1000000; i++){
      d1 += perSec1
      d2 += perSec2
      if(d2 >= d1){break}
      countSec += 1
    }
    let hours = Math.floor(countSec / 3600)
    countSec -= hours * 3600
    let minutes = Math.floor(countSec / 60)
    countSec -= minutes * 60
    let seconds = Math.floor(countSec)
    if(hours > 200){return null}
    return [hours, minutes, seconds]
}