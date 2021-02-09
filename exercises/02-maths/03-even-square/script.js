/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let i = 1;
        let message = "Voici les carrés des nombres pairs entre 1 et 21 :";
        while(i < 21){
            if (i % 2 == 0){
                let result = i * i;
                let addMessage = "\n"+i+"² = "+result;
                // console.log(addMessage);
                message = message.concat(addMessage);
            }
            i++;
        }
        alert(message);
    });
})();
