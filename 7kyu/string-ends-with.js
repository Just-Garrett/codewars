function solution(str, ending){
    let last = str.slice(str.length - ending.length)
    return last === ending
  }