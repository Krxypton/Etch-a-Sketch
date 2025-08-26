createGrid();

function createGrid(){
    const X = document.querySelector(".X");

    for(let x = 0; x <16; x++){
        let row = "";
        for(let i = x; i < 16; i++) {
        row += document.createElement("div");
        
        }
        X.appendChild(row);
    }
}
