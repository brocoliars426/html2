const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score")
const problemDisplay = document.getElementById("problema")
const playerInput = document.getElementById("rezultat")

let scor = 0;
let a, b;
let dificultate = 10;

// functia care imi porneste un joc nou
function newGame(level) {
    scor = 0;
    dificultate = level;

    newProblem(dificultate);

    scoreDisplay.textContent = scor;
    problemDisplay.textContent = newProblem(dificultate);
}

function newProblem(dificultate) {
    a = Math.floor(Math.random() * dificultate);
    b = Math.floor(Math.random() * dificultate);

    problemDisplay.style.color = "black";

    return a + " + " + b;
}

function verificare() {
    if (playerInput.value == a + b) {
        scor++;

        scoreDisplay.textContent = scor;
        problemDisplay.textContent = newProblem( dificultate);
        playerInput.value = "";
    }
    else {
        problemDisplay.style.color = "red";
    }
}

playerInput.addEventListener("input", verificare);
newGame(dificultate);