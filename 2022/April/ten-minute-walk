// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.



function isValidWalk(walk) {
  if(walk.length != 10) {return false}
  for(i = 0; i < 5; i++) {
    if(walk[i] === 's') { 
      if(walk.includes('n')){walk.splice(walk.indexOf('n'), 1)}
    } else if(walk[i] === 'n') {
      if(walk.includes('s')){walk.splice(walk.indexOf('s'), 1)}
    } else if(walk[i] === 'e') {
      if(walk.includes('w')){walk.splice(walk.indexOf('w'), 1)}
    } else if(walk[i] === 'w') {
      if(walk.includes('e')){walk.splice(walk.indexOf('e'), 1)}
    }
  }
  console.log(walk)
  return(walk.length === 5)
}