// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

function towerBuilder(nFloors) {
    let answer = []
    let max = nFloors * 2 - 1
    for(i = 0; i < nFloors; i++){
      let fill = ''.padEnd(1 + (2 * i), '*')
      answer.push(fill.padStart((max - fill.length) / 2 + fill.length).padEnd(max))
    }
    return answer
}