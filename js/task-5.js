function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const widget = document.querySelector('.widget');
const span = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');

changeColor.addEventListener('click', function () {
  const randomColor = getRandomHexColor();
  widget.style.backgroundColor = randomColor;
  span.textContent = randomColor;
});
