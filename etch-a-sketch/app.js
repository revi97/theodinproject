const grids = document.querySelector(".grids");
const gridSize = document.querySelector("#askUser");
let gridValue = gridSize.addEventListener("click", promtUser);
let root = document.querySelector(":root");
let changeColor ;

function change(){
  for(i = 0; i< changeColor.length; i++){
    changeColor.addEventListener("mouseleave", function (event){
      event.target.style.backgroundColor = "black";
    }, false);
  }
}


function makeRows(rows, cols) {
  grids.style.setProperty("--grid-rows", rows);
  grids.style.setProperty("--grid-cols", cols);
  for (c = 0; c < rows * cols; c++) {
    grids.classList.remove("grid-item");
    cell = document.createElement("div");
    grids.appendChild(cell).className = "grid-item";
  }
  setWidth(rows);
}

function promtUser() {
  Uservalue = prompt("What is the size you want the grid to be? (Max 100)");
  grids.innerHTML = "";
  if (Uservalue > 100 || Uservalue < 1) {
    promtUser();
    grids.innerHTML = "";
  }
  makeRows(Uservalue, Uservalue);
}

function setWidth(Uservalue) {
  widthValue = 600 / Uservalue;
  let nodes = document.querySelectorAll(".grid-item");
  changeColor = nodes;
  console.log(changeColor);
  //console.log(changeColor.length);
  for (i = 0; i < document.querySelectorAll(".grid-item").length; i++) {
    nodes[i].style.width = ("--grid-width", widthValue + "px");
    nodes[i].style.height = ("--grid-width", widthValue + "px");
  }
}


change();
/*let changeColor = document.querySelectorAll(".grid-item").length; */
//console.log(changeColor);

