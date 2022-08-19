// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

//     Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
//     A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
//     Every smiling face must have a smiling mouth that should be marked with either ) or D

// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]


function countSmileys(arr) {
    let count = 0
    for(i = 0; i < arr.length; i++){
      if(arr[i][0] == ':' || arr[i][0] == ';'){
        if(arr[i][1] == '-' || arr[i][1] == '~'){
          if(arr[i][2] == `)` || arr[i][2] == 'D'){
            count += 1
          }
        } else if(arr[i][1] == `)` || arr[i][1] == 'D'){
          count += 1
        }
      }
    }
    return count
}