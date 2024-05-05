import { Api } from './api';
import { passwordInput, emailInput } from './js';

import './sign-up.scss';

const api = new Api();

const signUp = () => {
  const registerButton = document.querySelector('#registerButton');
  let email = null;
  let password = null;

  emailInput().onValid((value) => (email = value));
  passwordInput().onValid((value) => (password = value));

  registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (email && password) {
      api.registration(email, password);
    }
  });
};

signUp();
