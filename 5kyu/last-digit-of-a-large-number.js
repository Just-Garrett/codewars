// Define a function that takes in two non-negative integers aaa and bbb and returns the last decimal digit of aba^bab. Note that aaa and bbb may be very large!

// For example, the last decimal digit of 979^797 is 999, since 97=47829699^7 = 478296997=4782969. The last decimal digit of (2200)2300({2^{200}})^{2^{300}}(2200)2300, which has over 109210^{92}1092 decimal digits, is 666. Also, please take 000^000 to be 111.

// You may assume that the input will always be valid.


var lastDigit = function(str1, str2){
    if(str1 == 0 && str2 == 0){return 1}
    if(str2 == 0){return 1}
    let str1Last = Number(str1.split('').splice(-1, 1))
    let str2Last = Number(str2.split('').splice(-1, 1))
    if(str2 == 1){return str1Last}
    console.log(str1Last, str2Last)
    switch(str1Last) {
        case 0:
          return 0;
        case 1:
          return 1;
        case 2:
          if(str2Last % 4 == 0){return 2}
          else if(str2Last % 4 == 1){return 4}
          else if(str2Last % 4 == 2){return 8}
          else if(str2Last % 4 == 3){return 6};
        case 3:
          if(str2Last % 4 == 0){return 3}
          else if(str2Last % 4 == 1){return 9}
          else if(str2Last % 4 == 2){return 7}
          else if(str2Last % 4 == 3){return 1};
        case 4:
          if(str2Last % 2 == 0){return 4}
          else if(str2Last % 2 == 1){return 6};
        case 5:
          return 5;
        case 6:
          return 6;
        case 7:
          if(str2Last % 4 == 0){return 7};
          if(str2Last % 4 == 1){return 9};
          if(str2Last % 4 == 2){return 3};
          if(str2Last % 4 == 3){return 1};
        case 8:
          if(str2Last % 4 == 0){return 8};
          if(str2Last % 4 == 1){return 4};
          if(str2Last % 4 == 2){return 2};
          if(str2Last % 4 == 3){return 6};
        case 9:
          if(str2Last % 2 == 0){return 9};
          if(str2Last % 2 == 1){return 1};
    }
}