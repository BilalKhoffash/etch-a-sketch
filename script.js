const parentDiv = document.querySelector('.parent-div');

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement('div');
    parentDiv.appendChild(div);
  }
}

const eachDiv = document.querySelectorAll('.parent-div div');
const slider = document.querySelector('#slider')

eachDiv.forEach(function (el) {
	el.addEventListener('mouseover', (e) => {
		e.target.style.backgroundColor = 'blue'
	});
});