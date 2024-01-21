let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;

window.onload = function() {
    setGame();
}


function setGame() {
    for (i=0; i<9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000); //every 1 secs setMole is being called
    setInterval(setPlant, 1000); //every 1.5 secs setMole is being called
}

function getRandomTile() {
    // to generate a random number between 0-9, 9 being exclusive
    let num = Math.floor(Math.random() * 9);

    //we return as string to use as id
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }

    if(currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "./monty-mole.png";

    let num = getRandomTile();

    if(currPlantTile && currPlantTile.id == num) {
        return;
    }

    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }

    if(currPlantTile) {
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png"

    let num = getRandomTile();

    if(currMoleTile && currMoleTile.id == num) {
        return;
    }

    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {
    if (gameOver) {
        return;
    }

    else if(this == currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString(); //update score
    }
    else {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
    }
}

// Target the reset button
const resetButton = document.getElementById("resetButton");
console.log(resetButton);
// Add event listener to the button
resetButton.addEventListener("click", resetGame);

function resetGame() {
  // Reset variables
  score = 0;
  gameOver = false;

  // Clear visual elements
  document.getElementById("score").innerText = "Score: 0";
  currMoleTile.innerHTML = "";
  currPlantTile.innerHTML = "";
}