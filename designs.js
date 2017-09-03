// Select color input
// Select size input


// When size is submitted by the user, call makeGrid()


const submitButton = getElementById('submitButton');
submitButton.addEventListener("click", function(e) {
  
  e.preventDefault(); 
  
  makeGrid();
});

function makeGrid() {
    let rows = document.getElementById('input_height').value;
    let columns = document.getElementById('input_width').value;
    console.log(rows, columns);

    table = document.getElementById("pixel_canvas");

    for (let i = 0; i < rows; i++) {
        row = table.insertRow(); // DOM method for creating table rows
        for (let j = 0; j < columns; j++) {
            row.insertCell().addEventListener("click", function() {
                let color = document.getElementById("colorPicker").value;
                this.style.backgroundColor = color;
            });
        }
    }
}