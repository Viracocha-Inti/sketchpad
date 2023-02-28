const gridContainer = document.getElementById("grid");

function createCanvas16X16() {
  for (let y = 0; y < 16; y++) {
    const divGridY = document.createElement("div");
    divGridY.classList.add("canvasGrid");
    // divGridY.textContent = "Y";
    gridContainer.appendChild(divGridY);
    for (let x = 0; x < 15; x++) {
      const divGridX = document.createElement("div");
      divGridX.classList.add("canvasGrid");
    //   divGridX.textContent = "x";
      gridContainer.appendChild(divGridX);
    }
  }
}

createCanvas16X16();
