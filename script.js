const entrar = document.getElementById('entrar');

entrar.addEventListener('click', () => {
  const login = document.getElementById('login').value;
  const senha = document.getElementById('senha').value;
  if (login !== 'tryber@teste.com' || senha !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
});

const button = document.getElementById('submit-btn');
const check = document.getElementById('agreement');

check.addEventListener('click', () => {
  if (check.checked) {
    button.removeAttribute('disabled');
  } else {
    button.setAttribute('disabled', 'true');
  }
});

const textarea = document.getElementById('textarea');

textarea.addEventListener('keyup', () => {
  const letter = textarea.value.length;
  const counterLetter = 500 - letter;
  const caracter = document.getElementById('counter');
  caracter.innerText = counterLetter;
});
