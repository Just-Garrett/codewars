// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

function humanReadable (seconds) {
  let h = Math.floor(seconds / 3600)
  seconds -= h * 3600
  let m = Math.floor(seconds / 60)
  seconds -= m * 60
  let s = seconds
  h > 9 ? h = String(h) : h = '0' + String(h)
  m > 9 ? m = String(m) : m = '0' + String(m)
  s > 9 ? s = String(s) : s = '0' + String(s)
  return `${h}:${m}:${s}`
}