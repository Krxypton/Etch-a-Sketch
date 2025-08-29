createGrid();


function createGrid() {
    let size = gridSize();
    const X = document.querySelector(".X");

    while(X.firstChild) {
        X.removeChild(X.firstChild);
    }

    for(let x = 0; x <size; x++){
        const row = document.createElement("div");
        X.appendChild(row);
        for(let i = 0; i < size; i++) {
        const gridsX = document.createElement("div");
        row.appendChild(gridsX);
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
    e.target.style.backgroundColor = "purple";
    return;
}

const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    createGrid();

})

function gridSize() {
    let answer = prompt("What do you want the grid size to be?");
    return answer;
}