/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let myBtn = document.getElementById('run').addEventListener("click", () => {
        let red, green, blue;
        function randCol(){
            let col = Math.round(((Math.random()*256)));
            col = col.toString(16);
            return col;
        }
        red = randCol();
        green = randCol();
        blue = randCol();
        newCol = "#"+red+green+blue;
        // console.log(newCol);
        document.body.style.backgroundColor = newCol;
        
    });
})();
