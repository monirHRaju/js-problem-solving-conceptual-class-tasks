function sumOfArray(arr){
    let sum = 0;
    for (let num of arr){
        sum += num;
    }
    return sum;
}


let arr = [50, 20,30,14];

const result = sumOfArray(arr);

console.log(result);