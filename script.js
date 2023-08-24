const gridContainer = document.querySelector("#gridContainer");
const resetGrid = document.querySelector("#newGrid");
const gridItem = document.querySelector(".gridItem");
const eraser = document.querySelector("#eraser");
const clear = document.querySelector("#clear");
const rainbow = document.querySelector("#rainbow");
const normal = document.querySelector("#normal");

createGrid(16);

function createGrid(answer) {
    document.querySelector("#gridContainer").innerHTML = "";
    for(i = 0; i < answer * answer; i++) {
        let squareSize = 960 / answer;
        const gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");
        gridItem.style.height = `${squareSize}px`
        gridItem.style.width = `${squareSize}px`
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener("mouseover", () => {
            gridItem.classList.add("black");
        })

        eraser.addEventListener("click", () => {
            gridItem.addEventListener("mouseover", () => {
                gridItem.style.backgroundColor = "";
                gridItem.classList.remove("black");
                gridItem.classList.add("white");
            })
        })

        clear.addEventListener("click", () => {
            gridItem.style.backgroundColor = "";
            gridItem.classList.add("white");
            gridItem.addEventListener("mouseover", () => {
                gridItem.classList.remove("white");
                gridItem.classList.add("black");
            })
           })

        rainbow.addEventListener("click", () => {
            gridItem.addEventListener("mouseover", () => {
                const randomR = Math.floor(Math.random() * 256);
                const randomG = Math.floor(Math.random() * 256);
                const randomB = Math.floor(Math.random() * 256);
                gridItem.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
            })
        })

        normal.addEventListener("click", () => { 
            gridItem.addEventListener("mouseover", () => {
                gridItem.classList.add("black");
                gridItem.classList.remove("white");
                gridItem.style.backgroundColor = "";
            })
        })
    }
}

function newGrid() {
    let answer = prompt("Please select a new grid size between 1 and 100: ");
    if (answer === null) {
        return;
    } else if (answer <= 100 && answer >= 1) {
        createGrid(answer);
    } else if (answer > 100 || answer < 1 || typeof answer === "string") {
        alert("Sorry, that is an incorrect input. Please try again.")
        newGrid();
    }
}

resetGrid.addEventListener("click", () => {
    newGrid();
})