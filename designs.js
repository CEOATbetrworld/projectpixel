// Select color input
// Select size input

var rows = document.getElementById("input_height").value;
var column = document.getElementById("input_width").value;
// When size is submitted by the user, call makeGrid()
document.getElementById("submit").addEventListener("click",makeGrid());

function makeGrid() {
    console.log("called");
    console.log(rows,column);
      table = document.getElementById("pixel_canvas");
  for (let i = 0 ; i < rows; i++) {
    row = table.insertRow();
    for(let j = 0 ; j < column ;j++){
    row.insertCell();
    }
  }

}










