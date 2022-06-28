// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

// Detailed rules

// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration (seconds) {
    if (seconds === 0) {return 'now'}
    let years = 0, days = 0, hours = 0, minutes = 0
    let statement = ''
    while (seconds >= 31536000) {
      years++
      seconds -= 31536000
    }
    while (seconds >= 86400) {
      days++
      seconds -= 86400
    }
    while (seconds >= 3600) {
      hours++
      seconds -= 3600
    }
    while (seconds >= 60) {
      minutes++
      seconds -= 60
    }
    let yearsTxt = years > 1 ? `${years} years` : `${years} year`
    let daysTxt = days > 1 ? `${days} days` : `${days} day`
    let hoursTxt = hours > 1 ? `${hours} hours` : `${hours} hour`
    let minutesTxt = minutes > 1 ? `${minutes} minutes` : `${minutes} minute`
    let secondsTxt = seconds > 1 ? `${seconds} seconds` : `${seconds} second`
    let arr = []
    if (years > 0) {arr.push(yearsTxt)}
    if (days > 0) {arr.push(daysTxt)}
    if (hours > 0) {arr.push(hoursTxt)}
    if (minutes > 0) {arr.push(minutesTxt)}
    if (seconds > 0) {arr.push(secondsTxt)}
    if (arr.length === 5) {return `${arr[0]}, ${arr[1]}, ${arr[2]}, ${arr[3]} and ${arr[4]}`}
    if (arr.length === 4) {return `${arr[0]}, ${arr[1]}, ${arr[2]} and ${arr[3]}`}
    if (arr.length === 3) {return `${arr[0]}, ${arr[1]} and ${arr[2]}`}
    if (arr.length === 2) {return `${arr[0]} and ${arr[1]}`}
    if (arr.length === 1) {return `${arr[0]}`}
  }