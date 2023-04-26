/* ------------------------------------ */
/* --- Exercice 1 --- */

let txt = document.getElementById("texte-exo1");  // cibler l element par l id texte-exo1
console.log(txt);
let btnToggle = document.getElementById("button-toggle");
// console.log(btnToggle)
btnToggle.addEventListener("click", getHideThisText);
function getHideThisText() {
    if (txt.style.display === "none") {
        txt.style.display = "block";
    } else {
        txt.style.display = "none";
    }

}



/* ------------------------------------ */
/* --- Exercice 2 --- */

const whereIAM = window.scrollY;
console.log(`La fenêtre est scrollée de ${whereIAM} pixels`);
console.log(whereIAM);




/* ------------------------------------ */
/* --- Exercice 3 --- */


let animalList = document.getElementById("ex3-animals");
let animalBtnLi = document.getElementById("button-li");
// console.log(animalBtnLi, animalList);
animalBtnLi.addEventListener("click", function () {
    animalList.appendChild(animalList.firstElementChild)
}
)






/* ------------------------------------ */
/* --- Exercice 4 --- */





/* ------------------------------------ */
/* --- Exercice 5 --- */


/* ------------------------------------ */
/* --- Exercice 6 --- */



/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];


/* ------------------------------------ */
/* --- Exercice 8 --- */
