// This does not currently function.

function spiralize (n) {
    let arr = []
    let temp = []
    for(i = 0; i < n; i++){
        switch(i){
            case 0:
                arr.push(Array(n).fill(1));
                break;
            case 1:
                temp = Array(n).fill(0)
                temp.splice(n - 1, 1, 1)
                arr.push(temp);
                break;
            case 2:
                temp = Array(n).fill(1)
                temp.splice(n - 2, 1, 0)
                arr.push(temp);
                break;
            case n - 2:
                temp = Array(n).fill(0)
                temp.splice(0, 1, 1)
                temp.splice(n - 1, 1, 1)
                arr.push(temp)
                break;
            case n - 1:
                arr.push(Array(n).fill(1));
                break;
        }
    }
    return arr
}


let arr = []
for(i = 0; i < n; i++){
    arr.push(Array(n).fill(0))
}

for(i = 0; i < n; i++){
    if(i = 0 || i == n - 1){
        arr[i] = Array(n).fill(1)
    } else{
        for(j = 0; j < n; j++){
            if(arr[i][j] == 0 || arr[i][j] == n - 1){
                arr[i][j] = 1
            } else if {
                arr[i][j + 2]
            }
        }
    }
}

