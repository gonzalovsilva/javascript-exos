/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById('run').addEventListener('click', () => {

        let dateNow, age, year, month, day;
        dateNow = new Date();
        year = document.getElementById('dob-year').value;
        month = document.getElementById('dob-month').value;
        day = document.getElementById('dob-day').value;

        age = dateNow.getFullYear() - year;
        // if (dateNow.getMonth() < month || (dateNow.getMonth() == month && dateNow.getDate() < day)) {
        //     age--;
        // }
        console.log(age);
        console.log(month);
    });
})();