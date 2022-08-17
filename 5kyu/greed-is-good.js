// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point

// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

// Example scoring

//  Throw       Score
//  ---------   ------------------
//  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
//  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
//  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)


function score( dice ) {
    let score = 0
    let num = []
    if(dice.length != 5){return false}
    dice.sort()
    for(i = 1; i <= 6; i++){
        num = dice.slice(dice.indexOf(i), dice.lastIndexOf(i) + 1)
        if(i == 1 && num.length >= 3){
        score += 1000 + (100 * (num.length - 3))
        } else if(i == 1){
        score += num.length * 100
        } else if(i == 5 && num.length >= 3){
        score += 500 + (50 * (num.length - 3))
        } else if(i == 5){
        score += num.length * 50
        } else if(num.length >= 3){
        score += i * 100
        }
    }
    return score
}
  