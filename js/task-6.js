function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsDiv = document.getElementById('controls');
const input = controlsDiv.querySelector('input');
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.getElementById('boxes');

createButton.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  boxesDiv.innerHTML = ''; // Очистити вміст перед додаванням нових елементів

  let size = 30; // Початковий розмір першого квадрата
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
    size += 10; // Збільшити розмір для наступного квадрата
  }

  input.value = ''; // Очистити значення input
});

destroyButton.addEventListener('click', () => {
  boxesDiv.innerHTML = ''; // Очистити вміст
});
