/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const performOperation = operation => {
        var numberOne = document.getElementById("op-one").value;
        var numberTwo = document.getElementById("op-two").value;

        if (isNaN(numberOne) || isNaN(numberTwo)) {
            alert("Les Opérande doivent contenir un numéro chaqu'une pour pouvoir effectuer l'operation.");
        } else if (numberOne === "" || numberTwo === "") {
            alert("SVP remplissez les cases Opérande avant d'essayer d'effectuer l'operation.");
        } else {
            switch (operation) {
                case "addition":
                    var result = Number(numberOne) + Number(numberTwo);
                    break;
                case "substraction":
                    var result = Number(numberOne) - Number(numberTwo);
                    break;
                case "multiplication":
                    var result = Number(numberOne) * Number(numberTwo);
                    break;
                case "division":
                    var result = Number(numberOne) / Number(numberTwo);
                    break;
                default:
                    var result = "Il y a eu un erreur de calcul"
            }
            alert("Resultat = " + result);
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();