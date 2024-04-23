import { validator } from './utils';

export const passwordInput = () => {
  const input = document.querySelector('#password');
  const capital = document.querySelector('#capital');
  const letter = document.querySelector('#letter');
  const number = document.querySelector('#number');
  const length = document.querySelector('#length');

  // Регулярные выражения для проверки пароля
  const lowerCaseLetters = /[a-z]/;
  const upperCaseLetters = /[A-Z]/;
  const numbers = /[0-9]/;

  document.getElementById('message').style.display = 'none';

  input.onfocus = function () {
    document.getElementById('message').style.display = 'block';
  };

  // Когда пользователь щелкает за пределами поля пароля, скрыть окно сообщения
  input.onblur = function () {
    document.getElementById('message').style.display = 'none';
  };
  // Функция для выполнения проверок при вводе пароля
  const handleInput = (e) => {
    const value = e.target.value;
    const {
      include: [includeLowerCase, includeUpperCase, includeNumber],
      minLength
    } = validator(value).test({ include: [lowerCaseLetters, upperCaseLetters, numbers], minLength: 8 });

    // Устанавливаем стили для отображения статуса длины пароля
    if (minLength) {
      length.classList.remove('invalid');
      length.classList.add('valid');
    } else {
      length.classList.remove('valid');
      length.classList.add('invalid');
    }

    // Устанавливаем стили для отображения статуса наличия строчных букв
    if (includeLowerCase) {
      letter.classList.remove('invalid');
      letter.classList.add('valid');
    } else {
      letter.classList.remove('valid');
      letter.classList.add('invalid');
    }

    // Устанавливаем стили для отображения статуса наличия заглавных букв
    if (includeUpperCase) {
      capital.classList.remove('invalid');
      capital.classList.add('valid');
    } else {
      capital.classList.remove('valid');
      capital.classList.add('invalid');
    }

    // Устанавливаем стили для отображения статуса наличия цифр
    if (includeNumber) {
      number.classList.remove('invalid');
      number.classList.add('valid');
    } else {
      number.classList.remove('valid');
      number.classList.add('invalid');
    }
  };

  input.addEventListener('input', handleInput);
};
