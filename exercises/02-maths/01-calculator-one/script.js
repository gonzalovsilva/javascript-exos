/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    function operation(op){
        var numberOne = document.getElementById("op-one").value;
        var numberTwo = document.getElementById("op-two").value;
        if (isNaN(numberOne) || isNaN(numberTwo)) {
            alert("Les Opérande doivent contenir un numéro chaqu'une pour pouvoir effectuer l'operation.");
        } else if (numberOne === "" || numberTwo === "") {
            alert("SVP remplissez les cases Opérande avant d'essayer d'effectuer l'operation.");
        } else {
            switch(op){
                case "+":
                    var result = Number(numberOne) + Number(numberTwo);
                    break;
                case "-":
                    var result = Number(numberOne) - Number(numberTwo);
                    break;
                case "*":
                    var result = Number(numberOne) * Number(numberTwo);
                    break;
                case "/":
                    var result = Number(numberOne) / Number(numberTwo);
                    break;
                default:
                    var result = "Il y a eu un erreur de calcul"
            }
            alert("Resultat = " + result);
        }
    }

    document.getElementById("addition").addEventListener("click", () => {
        operation("+");
    });

    document.getElementById("substraction").addEventListener("click", () => {
        operation("-");
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        operation("*");
    });

    document.getElementById("division").addEventListener("click", () => {
        operation("/");
    });
})();