// go through each array and stop on 0's
// create 3 temporary arrays that include all the numbers in the current sector(3x3), row, and column.
// have a list of available numbers from 1-9 [1, 2, 3, 4, 5, 6, 7, 8, 9]
// use replace(num, '' ) to remove numbers that exist in the 3 temporary arrays.
// if there is more than 1 number in the available numbers then move on.
// Do this for each array.  
// let available = available.filter(x => !arr[1].includes(x));


// if only 1 number is available then splice(current, 1, lastAvailable)
// run the function that creates the comparison sector, row, and column again.

// the while loop will complete when arr[0] through arr[9] do not contain 0's

function sudoku(arr) {

    let gridNums = (gridSquare) => {
      let x = []
      if(gridSquare === 1) {
        return x.concat(arr[0].slice(0, 3), arr[1].slice(0, 3), arr[2].slice(0, 3))
      }
      else if(gridSquare === 2) {
        return x.concat(arr[0].slice(3, 6), arr[1].slice(3, 6), arr[2].slice(3, 6))
      }
      else if(gridSquare === 3) {
        return x.concat(arr[0].slice(6, 9), arr[1].slice(6, 9), arr[2].slice(6, 9))
      }
      else if(gridSquare === 4) {
        return x.concat(arr[3].slice(0, 3), arr[4].slice(0, 3), arr[5].slice(0, 3))
      }
      else if(gridSquare === 5) {
        return x.concat(arr[3].slice(3, 6), arr[4].slice(3, 6), arr[5].slice(3, 6))
      }
      else if(gridSquare === 6) {
        return x.concat(arr[3].slice(6, 9), arr[4].slice(6, 9), arr[5].slice(6, 9))
      }
      else if(gridSquare === 7) {
        return x.concat(arr[6].slice(0, 3), arr[7].slice(0, 3), arr[8].slice(0, 3))
      }
      else if(gridSquare === 8) {
        return x.concat(arr[6].slice(3, 6), arr[7].slice(3, 6), arr[8].slice(3, 6))
      }
      else if(gridSquare === 9) {
        return x.concat(arr[6].slice(6, 9), arr[7].slice(6, 9), arr[8].slice(6, 9))
      }
    }
  
  
    let gridFinder = (x) => {
      let grids = [[0, 1, 2, 9, 10, 11, 18, 19, 20], [3, 4, 5, 12, 13, 14, 21, 22, 23], [6, 7, 8, 15, 16, 17, 24, 25, 26], [27, 28, 29, 36, 37 ,38, 45, 46, 47], [30, 31, 32, 39, 40, 41, 48, 49, 50], [33, 34, 35, 42, 43, 44, 51, 52, 53], [54, 55, 56, 63, 64, 65, 72, 73, 74], [57, 58, 59, 66, 67, 68, 75, 76, 77], [60, 61, 62, 69, 70, 71, 78, 79, 80]]
      if(grids[0].includes(x)){return 1}
      if(grids[1].includes(x)){return 2}
      if(grids[2].includes(x)){return 3}
      if(grids[3].includes(x)){return 4}
      if(grids[4].includes(x)){return 5}
      if(grids[5].includes(x)){return 6}
      if(grids[6].includes(x)){return 7}
      if(grids[7].includes(x)){return 8}
      if(grids[8].includes(x)){return 9}
    }
    let n = 0
    while(n < 100){
        n++
        for(i = 0; i < 81; i++){
            if(arr[Math.floor(i / 9)][i % 9] == 0){
                let available = [1, 2, 3, 4, 5, 6, 7, 8, 9]
                let row = arr[Math.floor(i / 9)]
                let column = []
                let grid = gridNums(gridFinder(i))
                for(j = 0; j < 9; j++) {
                    column.push(arr[j][i % 9])
                }
                available = available.filter(x => !row.includes(x))
                available = available.filter(x => !column.includes(x))
                available = available.filter(x => !grid.includes(x))
                if(available.length == 1) {
                    arr[Math.floor(i / 9)].splice((i % 9), 1, available[0])
                }
            }
        }
    }
    return arr
}