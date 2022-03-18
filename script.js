const grid = document.querySelector(".grid-container");
const edit = document.querySelector(".edit-button");

function divideGrid() {
    let input = parseInt( document.querySelector("#input").value );
    while (grid.firstChild) grid.removeChild(grid.firstChild);
    grid.style.gridTemplateRows = `repeat(${input}, auto)`;
    grid.style.gridTemplateColumns = `repeat(${input}, auto)`;
    for (let i = 0; i < input * input; i++) grid.append( document.createElement("div") );
}

function addHoverListener() {
    grid.childNodes.forEach((child) => {
        child.addEventListener("mouseover", () => animateDiv(child));
    });
}

function animateDiv(child) {
    child.style.backgroundColor = "#000";
    let increments = 10;
    for (let i = 0; i < increments; i++) {
        let color = 255 * i / increments;
        setTimeout(() => child.style.backgroundColor = `rgb(${color}, ${color}, ${color})`, i * 100);
    }
    setTimeout(child.style.backgroundColor = "", increments * 100);
}

for (let i = 0; i < 16 * 16; i++) grid.append( document.createElement("div") );
addHoverListener();

edit.addEventListener("click", () => {
    divideGrid();
    addHoverListener();
});