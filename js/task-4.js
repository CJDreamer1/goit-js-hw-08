const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleSubmit);
loginForm.style.display = 'flex';
loginForm.style.justifyContent = 'center';
loginForm.style.flexDirection = 'column';
loginForm.style.gap = `${16}px`;
loginForm.style.padding = `${24}px`;
loginForm.style.width = `${408}px`;
loginForm.style.heigth = `${256}px`;

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.currentTarget.elements;
  const emailValue = elements.email.value;
  const passwordValue = elements.password.value;
  if (emailValue === '' || passwordValue === '') {
    alert('All form fields must be filled in');
    return;
  }
  const info = {
    email: elements.email.value,
    password: elements.password.value,
  };
  console.log(info);
  event.currentTarget.reset();
}
