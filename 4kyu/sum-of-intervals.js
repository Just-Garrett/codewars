// Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
// Intervals

// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

function sumIntervals(intervals) {
    let arr = []
    for(i = 0; i < intervals.length; i++){
      for(j = intervals[i][0]; j < intervals[i][1]; j++){
        if(arr.includes(j)){
          
        }else{
          arr.push(j)
        }
      }
    }
    return arr.length
  }

// Try 2

function sumIntervals(intervals) {
    let sum = 0
    for(i = 0; i < intervals.length; i++){
      for(j = i + 1; j < intervals.length; j++){
        if(intervals[i][0] <= intervals[j][0] && intervals[j][0] <= intervals[i][1]){
          if(intervals[i][1] <= intervals[j][1]){
            intervals[i][1] = intervals[j][1]
            intervals[j] = [0, 0]
          }
        }
      }
    }
    for(i = 0; i < intervals.length; i++){
      sum += intervals[i][1] - intervals[i][0]
    }
    return sum
  }