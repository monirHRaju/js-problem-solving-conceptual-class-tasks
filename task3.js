function countVowels(str){
    if(typeof str !== 'string'){
        return 'invalid';
    }

    let count = 0;

    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        //method 1 to identify vowels
        // if('aeiouAEIOU'.includes(str[i])){
        //     count++;
        // }
        
        if(
            str[i] == 'a' ||
            str[i] == 'e' ||
            str[i] == 'i' ||
            str[i] == 'o' ||
            str[i] == 'u'
        ){
            count++
        }
    } 
    
    return count;
    } 
    

let str = 'I am bAngali.';
const result = countVowels(str);

console.log(result);