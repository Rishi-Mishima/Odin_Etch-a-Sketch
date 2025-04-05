const container = document.querySelector("#container");
const slideRange = document.getElementById("gridSize");
const gridValue = document.getElementById("gridValue");
const gridValue2 = document.getElementById("gridValue2");


// initialize the grid
let size = 16;

gridValue.textContent = size;
gridValue2.textContent = size;
createGrid(size);

// Change grid when slider moves
slideRange.addEventListener('input', () => {
    size = slideRange.value;
    gridValue.textContent = size;
    gridValue2.textContent = size;
    container.innerHTML = ""; // clear old grid
    createGrid(size);
});



//--------------------------------

// create grid 

function createGrid(size) {
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        square.addEventListener("mouseover", setRandomColor);

        container.appendChild(square);
    }
}


function changeColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor(e) {
    e.target.style.backgroundColor = changeColor();
}


// reset button 
const reset = document.querySelector("button");

reset.addEventListener("click", resetColor);

function resetColor() {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    })
}

