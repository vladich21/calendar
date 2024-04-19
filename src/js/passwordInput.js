import { validator } from './utils'

export const passwordInput = () => {
  const input = document.querySelector('#password')
  const capital = document.querySelector('#capital')
  const letter = document.querySelector('#letter')

  const lowerCaseLetters = /[a-z]/
  const upperCaseLetters = /[A-Z]/

  const handleInput = (e) => {
    const value = e.target.value
    const {
      include: [includeLowerCase, includeUpperCase]
    } = validator(value).test({ include: [lowerCaseLetters, upperCaseLetters] })

    if (includeLowerCase) {
      letter.classList.remove('invalid')
      letter.classList.add('valid')
    } else {
      letter.classList.remove('valid')
      letter.classList.add('invalid')
    }

    if (includeUpperCase) {
      capital.classList.remove('invalid')
      capital.classList.add('valid')
    } else {
      capital.classList.remove('valid')
      capital.classList.add('invalid')
    }
  }
  input.addEventListener('input', handleInput)
}
