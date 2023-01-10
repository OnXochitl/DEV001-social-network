/* eslint-disable indent */
// importamos la funcion que vamos a testear
import { Login } from '../src/Components/Login/loginIndex.js';
import { onNavigate } from '../src/main.js';
import { loginEmailAndPassword } from '../src/firebase.js';

describe('test de login', () => {
  const element = Login(onNavigate);
  const password = element.querySelector('#passwordInput');
  const email = element.querySelector('#emailInput');
  const form = element.querySelector('#home');
  it('debería ser una función', () => {
    expect(typeof Login).toBe('function');
  });
  it('Existe el boton de iniciar sesion', () => {
    const buttonRegister = element.querySelector('#registerButton');
    expect(buttonRegister).not.toBeNull();
  });
  it('Existe el boton de iniciar sesion con Google', () => {
    const buttonGoogle = element.querySelector('#buttonGoogle');
    expect(buttonGoogle).not.toBeNull();
  });
  it('Existe el boton de Ojo para ver el password', () => {
    const imageEyeClose = element.querySelector('#imageEye');
    expect(imageEyeClose).not.toBeNull();
    imageEyeClose.click();
    expect(password.type).toBe('text');
    imageEyeClose.click();
    expect(password.type).toBe('password');
  });
  it('Si el form es correcto', () => {
    email.value = 'example@correo.com';
    password.value = '12345678';
    form.submit();
    form.reset();
    expect(email.value).toBe('');
    expect(password.value).toBe('');
    expect(onNavigate('login')).toBe('/wall');
  });
  it('form incorrecto', () => {
    email.value = 'example@correo.com';
    password.value = '12345678';
    form.submit();
    const promise = loginEmailAndPassword('example@correo.com', '12345678');
    promise
      .catch((err) => {
        expect(err.code).toBe('auth/email-already-in-use');
        expect(err.code).toBe('auth/email-already-in-use');
      });
  });
});
