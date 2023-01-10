/* eslint-disable no-useless-escape */
const expressions = {
  user: /^[a-zA-Z0-9\_\-]{3,16}$/, // Letras, numeros, guion y guion_bajo
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^[a-zA-Z0-9\_\-]{6,16}$/,
};

const fields = {
  userInput: false,
  emailInput: false,
  passwordInput: false,
};

export const validateField = (expression, input, field, messageId) => {
  if (expression.test(input)) {
    document.getElementById(`${field}`).classList.add('check');
    document.getElementById(`${field}`).classList.remove('wrong');
    document.querySelector(`#${messageId}`).classList.remove('activo');
    fields[field] = true;
  } else {
    document.getElementById(`${field}`).classList.remove('check');
    document.getElementById(`${field}`).classList.add('wrong');
    document.querySelector(`#${messageId}`).classList.add('activo');
    fields[field] = false;
  }
};

export const validateEquals = (input, input2, messageId) => {
  const inputVer1 = document.getElementById(`${input}`);
  const inputVer2 = document.getElementById(`${input2}`);
  if (inputVer1.value === inputVer2.value) {
    document.getElementById(`${input2}`).classList.add('check');
    document.getElementById(`${input2}`).classList.remove('wrong');
    document.querySelector(`#${messageId}`).classList.remove('activo');
    fields[input] = true;
  } else {
    document.getElementById(`${input2}`).classList.remove('check');
    document.getElementById(`${input2}`).classList.add('wrong');
    document.querySelector(`#${messageId}`).classList.add('activo');
    fields[input] = false;
  }
};

export const validateFirst = (input, input2) => {
  const inputVer1 = document.getElementById(`${input}`);
  const inputVer2 = document.getElementById(`${input2}`);
  if (inputVer1.value === inputVer2.value) {
    document.getElementById(`${input2}`).classList.add('check');
    document.getElementById(`${input2}`).classList.remove('wrong');
  } else {
    document.getElementById(`${input2}`).classList.remove('check');
    document.getElementById(`${input2}`).classList.add('wrong');
  }
};

export const validate = (name, value, elementId) => {
  switch (name) {
    case 'user':
      validateField(expressions.user, value, 'userInput', elementId);
      break;
    case 'email1':
      validateField(expressions.email, value, 'emailInput', elementId);
      break;
    // case 'email2':
    //   validateEquals('emailInput', 'emailInput2', elementId);
    //   break;
    case 'password1':
      validateField(expressions.password, value, 'passwordInput', elementId);
      validateFirst('passwordInput', 'passwordInput2');
      break;
    case 'password2':
      validateEquals('passwordInput', 'passwordInput2', elementId);
      break;
    // eslint-disable-next-line no-empty
    default: {}
  }
};
