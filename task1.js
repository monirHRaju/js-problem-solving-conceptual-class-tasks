function multiply (input1, input2) {
    let result = input1 * input2;
    return result
}

function sum (input1, input2) {
    let result = input1 + input2;
    return result
}

let a = 12;
let b = 10;

const result = sum(a, b) + multiply (a, b);

console.log(result);
