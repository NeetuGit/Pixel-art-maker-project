document.getElementById("sub").addEventListener("click", makeGrid);

// When size is submitted by the user, call makeGrid()

function makeGrid() {

	var nRows = document.getElementById('input_height').value;
	var nColumns = document.getElementById('input_width').value;
	
	var table = document.getElementById("pixel_canvas");
	
	for (var i = 0; i < nRows; i++)
		{ 
		var row=table.insertRow(i);
		for (var j = 0; j < nColumns; j++)
			{
			var cell = row.insertCell(j);
			 cell.addEventListener('click', addEvent(cell));
			}
		   }
		}
		let addEvent = function(cell) {
        cell.addEventListener('click', function() {
		cell.style.backgroundColor = document.getElementById('colorPicker').value;
        });
    }


