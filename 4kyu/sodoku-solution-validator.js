// Given an array of 9 arrays with 9 values, check if it is a valid sodoku solution

function validSolution(board){
    let arrTst = []
    let tst = new Set()
    let answer = true
    console.log(board)
    function verify(currentSection) {
      tst = new Set(currentSection)
      if (tst.size < 9) { return answer = false}
    }
    // Horizontal
    for (i = 0; i < 9; i++) {
      if (board[i].includes(0)) {return false}
      else {verify(board[i])}
    }
    // Vertical
    for (i = 0; i < 9; i++) {
      let vert = []
      for (j = 0; j < 9; j++) {
        vert.push(board[j][i])
      }
      if (vert.includes(0)) {return false}
      else {verify(vert)}
    }
    
    // 3 x 3
    let mult = 0
    for (i = 0; i < 9; i++) {
      let sqr = []
      for (j = 0; j < 3; j++){
        sqr.push(board[j][mult])
      }
      mult += 1
      for (j = 0; j < 3; j++){
        sqr.push(board[j][mult])
      }
      mult += 1
      for (j = 0; j < 3; j++){
        sqr.push(board[j][mult])
      }
      mult += 1
      verify(sqr)
      if ( mult == 9){
        board.shift()
        board.shift()
        board.shift()
        mult = 0;
      } else {}    
    }
    return answer
  }