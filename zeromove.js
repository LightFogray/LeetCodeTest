// 例如：[0,1,2,0,5]-------->[1,2,5,0,0]
function moveZeroToTail(numArr) {
    let j = 0;
    for (let i=0; i<numArr.length; i++) {
        if (numArr[i] != 0) {
            numArr[j] = numArr[i];
            if (i != j) {
                numArr[i] = 0;
            }
            j++;
            // console.log(numArr)
        }
        
    }
    return numArr;
}
let array = [0,1,2,0,5];
console.log(moveZeroToTail(array));