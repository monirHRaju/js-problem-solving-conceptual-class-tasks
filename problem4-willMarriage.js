/**
 * will marriage if age difference within 7, gender not same.
*/


function willMarriage(person1, person2){

    if(typeof person1 !== "object" || typeof person2 !== "object" ){
        return "invalid";
    }
    
    
    if(person1.gender == person2.gender || Math.abs(person1.age - person2.age > 7 )){
        return false;
    } 
    
    return true;
    

}


console.log(willMarriage(
    { name: "toya", gender: "female", age: 20 },
{ name: "bjoy", gender: "male", age: 32 }
))