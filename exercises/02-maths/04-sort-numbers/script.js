/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    document.getElementById("run").addEventListener("click", () => {
        let numbersAsText = document.getElementById("numbers").value;
        let numbersArray = numbersAsText.split(",");
        numbersArray = numbersArray.map(function (i){
            return Number(i);
        });
        let numbersSorted = numbersArray.sort(function(a, b){return a-b});
        // console.log(numbersSorted.toString());
        alert(numbersSorted.toString());
    });
})();
