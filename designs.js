// Select color input

// Select size input


// When size is submitted by the user, call makeGrid()
document.getElementById("give").addEventListener("click",makeGrid);

function makeGrid() {
	let rows = document.getElementById('input_height').value;
    let  columns = document.getElementById('input_width').value;
   console.log(rows , columns);
// Your code goes here

 table = document.getElementById("pixel_canvas");

  for (let i=1; i < rows; i++) 
  {
    row = table.insertRow();  // DOM method for creating table rows
    for(let j = 0 ; j < columns ; j++)
    {
    row.insertCell()
    }
  }
  


 
