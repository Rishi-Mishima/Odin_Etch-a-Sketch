const container = document.querySelector("#container");

const gridsize = 16;

for (let i = 0; i < gridsize * gridsize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

}