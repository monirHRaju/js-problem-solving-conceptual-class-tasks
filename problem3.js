/**
 *  pass number 50
 * will success true if most of the number are above 50
 *  
*/

function willSuccess(arr){
    if(Array.isArray(arr) !== true){
        return 'Invalid'
    }
    let passed = 0;
    let failed = 0;
    for(let i=0; i < arr.length; i++){
        if(arr[i] >= 50){
            passed++
        } else {
            failed++
        }
    }
    if(passed>failed){
        return true
    } else{
        return false
    }
    
}

const numbers = [48, 48, 50, 50, 100]
const result = willSuccess(numbers);

console.log(result);