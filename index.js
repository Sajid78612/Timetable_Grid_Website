var boxes = document.getElementById('boxes');
var columnHeaders = document.getElementById('column-headers');
var rowHeaders = document.getElementById('row-headers');

function createBoxes(min, max) {
	createColumnHeaders(min, max);
	createRowHeaders(min, max);

	for (let i = min; i <= max; i++) {
		
		for (let j = min; j <= max; j++) {
			var box = document.createElement('INPUT');
			//box.setAttribute('type', 'text');
			var boxId = i + 'x' + j;
			box.setAttribute('id', boxId);
			var boxValue = i * j;
			//box.setAttribute('value', boxValue);
			//box.setAttribute('data-value', boxValue);
			box.classList.add('box');
			boxes.append(box);
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

createBoxes(1,13);