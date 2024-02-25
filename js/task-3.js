const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', value => {
  const trimmedInput = nameInput.value.trim();

  if (trimmedInput) {
    nameOutput.textContent = trimmedInput;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});
