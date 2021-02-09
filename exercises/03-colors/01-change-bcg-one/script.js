/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const performOperation = operation => {
        let bg = document.body;

        switch (operation) {
            case "red":
                bg.style.backgroundColor = "red";
                break;
            case "green":
                bg.style.background = "green";
                break;
            case "yellow":
                bg.style.background = "yellow";
                break;
            case "blue":
                bg.style.background = "blue";
                break;
            default:
                bg.style.background = "#16232E";
        }
    };

    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();