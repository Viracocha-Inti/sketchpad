let color = "black";

function createCanvas(size) {
  let canvas = document.querySelector(".grid");
  let squares = canvas.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  canvas.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquares);
    square.classList.add("canvasGrid");
    square.style.backgroundColor = "white";
    canvas.insertAdjacentElement("beforeend", square);
  }
}
function changeCanvasSize(input) {
  if (input >= 2 && input <= 100) {
    createCanvas(input);
  } else if (input < 2) {
    console.log("Not enough squares");
  } else {
    console.log("Too many squares");
  }
}

function colorSquares() {
  if (color === "random") {
    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
  } else {
    this.style.backgroundColor = color;
  }
}

function changeColor(choice) {
  color = choice;
}

function clearCanvas() {
  let canvas = document.querySelector(".grid");
  let squares = canvas.querySelectorAll("div");
  squares.forEach((div) => (div.style.backgroundColor = "white"));
}

createCanvas(16);

//Function below will create the 16x16 sketchpad
// function createCanvas16X16() {
//   for (let y = 0; y < 16; y++) {
//     const divGridY = document.createElement("div");
//     divGridY.classList.add("canvasGrid");
//     // divGridY.textContent = "Y";
//     gridContainer.appendChild(divGridY);
//     for (let x = 0; x < 15; x++) {
//       const divGridX = document.createElement("div");
//       divGridX.classList.add("canvasGrid");
//       //   divGridX.textContent = "x";
//       gridContainer.appendChild(divGridX);
//     }
//   }
// }
// createCanvas16X16();
