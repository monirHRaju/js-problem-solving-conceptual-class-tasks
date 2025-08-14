function cashOut(money){
    if(money < 0 || typeof money != 'number'){
        return 'Please provide a valid number';
    }
    let charge = money * 0.0175; // result in number with long decimal figure.
    let fixedValue = charge.toFixed(2); //converted to string
    return parseFloat(fixedValue); //convert to number
}

const money = 350;
const result = cashOut(money);
console.log(result);