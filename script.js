createGrid();


function createGrid() {
    let size = gridSize();
    const X = document.querySelector(".X");

    while(X.firstChild) {
        X.removeChild(X.firstChild);
    }

    for(let x = 0; x <size; x++){
        const column = document.createElement("div");
        X.appendChild(column);
        for(let i = 0; i < size; i++) {
        const gridsX = document.createElement("div");
        column.appendChild(gridsX);
        }
    }
}

let grid = document.querySelectorAll(".X");

grid.forEach(grids => {
grids.addEventListener("mousemove", (e) => {
    hover(e);
})
})

function hover(e) {
   
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Set the square's background to the random color
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  
    return;
}

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    createGrid();

})

function gridSize() {
    let answer = prompt("What do you want the grid size to be?");
    if(answer <= 100 && answer >= 0) {
        return answer;
    }
    else {
        alert("This is an invalid number, choose between 0-100");
        return;
    }
}

const reset = document.querySelector(".reset");
const squares = document.querySelectorAll(".X > div > div");

reset.addEventListener("click", (e) => {
    clearGrid();
}) 

function clearGrid() {
    squares.forEach(square => {
        square.style.backgroundColor = "white"; 
    })
}