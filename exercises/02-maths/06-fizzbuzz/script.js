/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {
    // your code here
    let number = prompt("Enter a number between 1 and 100.");
    if(isNaN(number)){
        alert("Try again with a number between 1 and 100.");
    }
    else{
        if(number <1 || number > 100){
            alert("Must be between 1 and 100.");
        }
        else{
            if(number % 3 && number % 5){
                console.log("fizzbuzz");
            }
            else if(number % 3){
                console.log("fizz");
            }
            else if(number % 5){
                console.log("buzz");
            }
            else{
                console.log(number);
            }
        }
    }

})();
