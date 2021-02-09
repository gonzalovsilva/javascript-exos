/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function questionaire() {
        var age = prompt("Quel est ton âge ?");
        var sexe = prompt("Quel est ton sexe ?");
        var ville = prompt("Quelle est ta ville ?");

        var confirmation = confirm("Ces informations sont elles correctes ?\n âge = " + age + "\n sexe = " + sexe + "\n ville = " + ville);

        if (confirmation) {
            alert("Merci pour ces infos.");
        } else {
            alert("On va essayer une nouvelle fois.");
            questionaire();
        }
    }
    questionaire();

})();