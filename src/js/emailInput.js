import { validator } from './utils';

export const emailInput = () => {
  const email = document.querySelector('#email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let handler = null;
  const handleInput = (e) => {
    const value = e.target.value;
    const {
      include: [emailIsValid]
    } = validator(value).test({ include: [emailRegex] });

    if (emailIsValid) {
      handler?.(value);
    }
  };

  email.addEventListener('input', handleInput);

  return {
    onValid: (handleValid) => (handler = handleValid)
  };
};
