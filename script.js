const container = document.querySelector("#container");

const gridsize = 16;

const slideRange = document.getElementById("gridSize");
const gridValue = document.getElementById("gridValue");
const gridValue2 = document.getElementById("gridValue2");

slideRange.addEventListener('input', changeGrid);

function changeGrid() {
    const size = slideRange.value;
    gridValue.textContent = size;
    gridValue2.textContent = size;
    recreateGrid(size);
}



//--------------------------------

for (let i = 0; i < gridsize * gridsize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

}



const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener('mouseover', setRandomColor);
})

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

function enableFadingTrail() {
    document.querySelectorAll(".square").forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
        square.addEventListener("mouseout", () => {
            square.style.backgroundColor = "white";
        });
    });
}

const reset = document.querySelector("button");

reset.addEventListener("click", resetColor);

function resetColor() {
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    })
}

