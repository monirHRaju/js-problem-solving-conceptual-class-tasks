/**
 * check a valid phone number
 * that starts with 01, has 11 digits and not have any spaces.
*/

function validNumber(contact){
    if(typeof contact !== 'string'){
        return 'Invalid Number'
    }
    if(
        contact.startsWith('01') == true &&
        contact.length == 11 &&
        contact.includes(' ') == false
    ){
        return 'a valid Number'

    } else {
        return 'check number'
    }
}

const contact = true;
console.log(validNumber(contact));