const parentDiv = document.querySelector('.parent-div');
const slider = document.querySelector('#slider');
const currentSize = document.querySelector('.current-size');
const checkBox = document.querySelector('#checkbox');

function createGrid(dimension) {
	parentDiv.textContent = '';
	const parentHeight = parentDiv.clientHeight;
	const parentWidth = parentDiv.clientWidth
	const childDivHeight = parentHeight / dimension;
	const childDivWidth = parentWidth / dimension;


	for (let i = 0; i < dimension; i++) {
	  for (let j = 0; j < dimension; j++) {
	    const div = document.createElement('div');
			div.style.width = `${childDivWidth}px`;
			div.style.height = `${childDivHeight}px`;
	    parentDiv.appendChild(div);
	  }
	}

	currentSize.textContent = `${dimension} X ${dimension}`
	const eachDiv = document.querySelectorAll('.parent-div div');

	eachDiv.forEach(function (el) {
		el.addEventListener('mouseover', (e) => {
			if (checkBox.checked) {
				e.target.style.backgroundColor = randomizeColor();
			} else {
				e.target.style.backgroundColor = 'blue';
			}
		});
	});
}

createGrid(16)

slider.addEventListener("input", (el) => {
	const dimension = Number(el.target.value);
	createGrid(dimension);
});

function randomizeColor() {

	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);

	const toHex = (value) => value.toString(16).padStart(2, '0');
	return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}