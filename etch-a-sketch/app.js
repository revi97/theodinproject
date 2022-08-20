const grids = document.querySelector(".grids");
const gridSize = document.querySelector("#askUser");
let gridValue = gridSize.addEventListener("click", promtUser);

function makeRows(rows, cols) {
  grids.style.setProperty("--grid-rows", rows);
  grids.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    grids.classList.remove("grid-item");
    cell = document.createElement("div");
    grids.appendChild(cell).className = "grid-item";
  }
}
function promtUser() {
  Uservalue = prompt("What is the size you want the grid to be? (Max 100)");
  grids.innerHTML = "";
  if(Uservalue > 100 || Uservalue < 1){
    promtUser();
    grids.innerHTML = "";
  }
  makeRows(Uservalue, Uservalue);
}
