/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
        let number = document.getElementById("number").value;
        function fact(nbr) {
            // Si nbr = 0 la factorielle retournera 1
            if (nbr === 0) {
                return 1;
            }
            // appelez à nouveau la procédure récursive
            return nbr * fact(nbr - 1);
        }
        alert(fact(number));
    });
})();