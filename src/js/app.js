// import '../scss/style.scss';

let myInput = document.getElementById("password");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

// Когда пользователь нажимает на поле Пароль, отображается окно сообщения
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// Когда пользователь щелкает за пределами поля пароля, скрыть окно сообщения
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}
// Когда пользователь начинает вводить что-то в поле пароля
myInput.onkeyup = function() {
    // Проверка строчных букв
    let lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }
// Проверка заглавных букв
let upperCaseLetters = /[A-Z]/g;
if(myInput.value.match(upperCaseLetters)) {
  capital.classList.remove("invalid");
  capital.classList.add("valid");
} else {
  capital.classList.remove("valid");
  capital.classList.add("invalid");
}

// Проверка чисел
let numbers = /[0-9]/g;
if(myInput.value.match(numbers)) {
  number.classList.remove("invalid");
  number.classList.add("valid");
} else {
  number.classList.remove("valid");
  number.classList.add("invalid");
}

// Проверить длину
if(myInput.value.length >= 8) {
  length.classList.remove("invalid");
  length.classList.add("valid");
} else {
  length.classList.remove("valid");
  length.classList.add("invalid");
}
}