const board = document.querySelector(".board");
const gridSize = document.getElementById("grid-size");
const size = document.querySelector(".size");
const penColor = document.querySelector("#pen-color");
const bgColor = document.querySelector("#bg-color");
const container = document.querySelector(".container");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const eraserChange = document.querySelector(".erase");

// Assign Variable for pen color and background color
let bgColorValue;
let penColorValue;

// Assign eraserClicked to false at start
let eraserClicked = false;

// Change background color of the board before gridsize change based on change in background color input
bgColor.addEventListener("input", () => {
  bgColorValue = bgColor.value;
  board.style = `background-color: ${bgColorValue};`;
});

// Change pen color before gridsize change based on change in background color input
penColor.addEventListener("input", () => {
  penColorValue = penColor.value;
});

// Add addEventListener for change in gridSize
gridSize.addEventListener("change", () => {
  container.innerHTML = "";

  //   change size textcontent on change of gridSize
  let gridValue = gridSize.value;
  size.textContent = `Grid-Size: ${gridValue}×${gridValue}`;

  // create gridContainer(number of colomns) based on the number of gridSize and append it to allGrid
  for (let i = 0; i < `${gridValue}`; i++) {
    let gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    container.appendChild(gridContainer);
    container.style.cssText = `display: grid;
          grid-template-columns: repeat(${gridValue}, 1fr);`;
  }

  let gridContainer = container.querySelectorAll(".grid-container");
  // create gridContent(number of rows) based on the number of gridContainer and append it to gridContainer
  gridContainer.forEach((container) => {
    for (let i = 0; i < `${gridValue}`; i++) {
      let gridContent = document.createElement("div");
      gridContent.classList.add("grid-content");
      container.appendChild(gridContent);
      container.style.cssText = `display: grid;
              grid-template-rows: repeat(${gridValue}, 1fr);`;
    }
  });

  //   Clear the board
  clear.addEventListener("click", () => {
    const gridContent = document.querySelectorAll(".grid-content");
    gridContent.forEach((content) => {
      content.style = `background-color: transparent};`;
    });
  });

  // Change background color of the board after gridsize change based on change in background color input
  bgColor.addEventListener("input", () => {
    bgColorValue = bgColor.value;
    board.style.cssText = `background-color: ${bgColorValue};`;
  });

  // Change pen color after gridsize change based on change in background color input and change eraserClicked to false
  penColor.addEventListener("input", () => {
    eraserClicked = false;
    penColorValue = penColor.value;
    eraserChange.textContent = `Eraser Off.`;
  });

  //   Change eraserClicked to true to erase each gridContent
  eraser.addEventListener("click", () => {
    eraserClicked = true;
    eraserChange.textContent = `Eraser On.`;
  });

  const gridContent = document.querySelectorAll(".grid-content");
  //   Erase if eraserClicked is true else draw to the board
  gridContent.forEach((content) => {
    content.addEventListener("mouseenter", (e) => {
      if (eraserClicked) {
        e.currentTarget.style.cssText = `background-color: transparent;`;
      } else {
        e.currentTarget.style.cssText = `background-color: ${penColorValue};`;
      }
    });
  });
});
