var boxes = document.getElementById('boxes');
var columnHeaders = document.getElementById('column-headers');
var rowHeaders = document.getElementById('row-headers');

function createBoxes(min, max) {
	createColumnHeaders(min, max);
	createRowHeaders(min, max);

	for (let i = min; i <= max+1; i++) {

		for (let j = min; j <= max; j++) {
			var box = document.createElement('INPUT');
			box.setAttribute('type', 'int');
			var boxId = i + 'x' + j;
			box.setAttribute('id', boxId);
			var boxValue = i * j;
			var colnId = '1x' + j;
			var rowId = j + 'x1';
			console.log(colnId);
			//col.setAttribute('data-value', j);
			//box.setAttribute('data-value', boxValue);
			box.classList.add('box');
			boxes.append(box);
			var col = document.getElementById(colnId);
			col.setAttribute('value', j);
			// var row = document.getElementById(rowId);
			// row.setAttribute('value', j)
			
		}

		}
	}
	
	function createColumnHeaders(min, max) {
		for (let i = min; i <= max; i++) {
		var columnHeader = document.createElement('div');
		columnHeader.classList.add('header');
		columnHeader.innerText = i;
		columnHeaders.append(columnHeader);
	}
}

function createRowHeaders(min, max) {
	for (let i = min; i <= max; i++) {
		var rowHeader = document.createElement('div');
		rowHeader.classList.add('header');
		rowHeader.innerText = i;
		rowHeaders.append(rowHeader);
	}
}

function generate_table(min,max) {
	// get the reference for the body
	var body = document.getElementsByTagName("body")[0];
  
	// creates a <table> element and a <tbody> element
	var tbl = document.createElement("table");
	var tblBody = document.createElement("tbody");
  
	// creating all cells
	for (var i = min; i <= max; i++) {
	  // creates a table row
	  var row = document.createElement("tr");
	  var rowId = i + 'x1';
	  row.setAttribute('id', rowId);
	  //document.getElementById(rowId).innerHTML = "hi"
	  
	  
	  for (var j = min; j <= max; j++) {
		  // Create a <td> element and a text node, make the text
		  // node the contents of the <td>, and put the <td> at
		  // the end of the table row
		  var cell = document.createElement("td");
		  var boxId = i + 'x' + j;
		  cell.setAttribute("id", boxId );
		  var colnId = '1x' + j;
		  var col = document.getElementById(colnId);
		  col.setAttribute('value', j);

		  var cellText = document.createTextNode("cell in row "+i+", column "+j);
		cell.appendChild(cellText);
		row.appendChild(cell);
	  }
  
	  // add the row to the end of the table body
	  tblBody.appendChild(row);
	}
  
	// put the <tbody> in the <table>
	tbl.appendChild(tblBody);
	// appends <table> into <body>
	body.appendChild(tbl);
	// sets the border attribute of tbl to 2;
	tbl.setAttribute("border", "2");
  }

createBoxes(1,12);
generate_table(1,12);