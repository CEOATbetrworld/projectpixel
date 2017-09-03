
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener("click", function(e) {
  
  e.preventDefault(); 
  
  makeGrid();
});

function makeGrid() {
    let rows = document.getElementById('input_height').value;
    let columns = document.getElementById('input_width').value;
    console.log(rows, columns);
    if(rows > 48 || columns > 48 ){
        alert("Value of rows or columns can not be more than 48")
    }
    else{

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
}