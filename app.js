let container = document.querySelector(".container");
let divSketch = document.createElement("div");

divSketch.classList.add("sketch");
container.append(divSketch);

function removeSquares() {
    let div = document.getElementsByClassName("square");
    Array.from(div).forEach(function (el) {
        el.remove();
    })
}

function getNumberOfSquares() {
    numberOfSquares = parseInt(document.getElementById("text").value);
    return numberOfSquares
}

function createSquare(numberOfSquares) {
    removeSquares();

    for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
        let sqaure = document.createElement("div");
        sqaure.classList.add("square")
        divSketch.append(sqaure)
    }
    divSketch.style.gridTemplateColumns = `repeat(${numberOfSquares},15px)`;
}

createSquare(25);


// ! EVENT LISTENERS

// Listener for changing the size
let number = document.querySelector("input[type='text']");
number.addEventListener("input", function () {
    createSquare(getNumberOfSquares())
})

// Listener for drawing
function getColor() {
    let color = document.querySelector("input").value;
    return color
}
let draw = function () {
    this.style.background = getColor()
}
let switcher = 1;

divSketch.addEventListener("click", () => {
    let squares = document.querySelectorAll(".square");
    let arrOfSquares = Array.from(squares);
    if (switcher > 0) {
        console.log("switcher is on")
        arrOfSquares.forEach(function (el) {
            el.addEventListener("mouseover", draw)
        })
    } else {
        console.log("switcher is off")
        arrOfSquares.forEach(function (el) {
            el.removeEventListener("mouseover", draw)
        })
    }
    switcher *= -1;
}
)


