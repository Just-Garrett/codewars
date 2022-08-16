

function findNb(m) {
    let volumeLeft = m
    let cubes = 0
    while(volumeLeft >= 0){
        if(volumeLeft === 0){
        return cubes - 1
        }
        volumeLeft -= cubes * cubes * cubes
        cubes++
    }
    return -1
}
  