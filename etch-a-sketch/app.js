const grids = document.querySelector(".grids");
const gridSize = document.querySelector("#askUser");
let gridValue = gridSize.addEventListener("click", promtUser);
const gridPixel = document.querySelector('.grid-item');
let root = document.querySelector(':root');


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
  if(Uservalue > 100 || Uservalue < 1){
    promtUser();
    grids.innerHTML = "";
  }
  makeRows(Uservalue, Uservalue);
 
}

function setWidth(Uservalue)
{
  widthValue = 600/Uservalue;
  console.log('Grid :', widthValue);
  let nodes = document.querySelectorAll('.grid-item')
  console.log(document.querySelectorAll('.grid-item').length);
  for(i= 0 ; i< document.querySelectorAll('.grid-item').length; i++)
  {
    nodes[i].style.width = ('--grid-width', widthValue + 'px');
    nodes[i].style.height = ('--grid-width', widthValue + 'px');
    console.log(i);
  }

}
