const board = document.querySelector('#board');

const SQUARES_NUMBER = 625;
const COLORS = [
  '#E7717D',
  '#C2CAD0',
  '#C2B9B0',
  '#7E685A',
  '#AFD275',
  '#D79922',
  '#EFE2BA',
  '#F13C20',
  '#4056A1',
  '#C5CBE3'
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);

  board.append(square)
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();

  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = '';
  element.style.boxShadow = '';
}

function getRandomColor() {
  const index = Math.floor(Math.random() * COLORS.length)
  return COLORS[index];
}
