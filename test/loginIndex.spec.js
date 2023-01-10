/* eslint-disable indent */
// importamos la funcion que vamos a testear
// import { signInWithEmailAndPassword } from '../__mocks__/@firebase/auth';
import { Login } from '../src/Components/Login/loginIndex.js';
import { onNavigate } from '../__mocks__/main.js';

// window.alert = jest.fn();
// jest.mock('firebase/auth');
// jest.mock('../__mocks__/main.js');
jest.mock('../src/firebase.js');

describe('test de login', () => {
   const element = Login();
   const password1 = element.querySelector('#passwordInput');
  //  const email = element.querySelector('#emailInput');
  //  const form = element.querySelector('#home');

  it('debería ser una función', () => {
    expect(typeof Login).toBe('function');
  });
  it('Existe el boton de iniciar sesion', () => {
    const buttonRegister = element.querySelector('#registerButton');
    expect(buttonRegister).not.toBeNull();
  });
  it('OnNavigate debe ser una función', () => {
     expect(typeof onNavigate).toBe('function');
  });
  it('Existe el boton de iniciar sesion con Google', () => {
    const buttonGoogle = element.querySelector('#buttonGoogle');
    expect(buttonGoogle).not.toBeNull();
  });
  it('Existe el boton de Ojo para ver el password', () => {
    const imageEyeClose = element.querySelector('#imageEye');
    expect(imageEyeClose).not.toBeNull();
    expect(password1.type).toBe('password');
    imageEyeClose.click();
    expect(password1.type).toEqual('text');
  });
  // it('Si el form es correcto', () => {
  //   email.value = 'example@correo.com';
  //   password1.value = '12345678';
  //   form.submit();
  // eslint-disable-next-line max-len
  //   expect(signInWithEmailAndPassword).toHaveBeenCalledWith(undefined, 'example@correo.com', '12345678');
  //   });

    // it('Si el form es incorrecto', () => {
    //   form.submit();
      // const promise = signInWithEmailAndPassword(undefined, 'example@correo.com', '12345678');
     // expect(window.alert.mockClear()).toBeCalled(0);
      // promise.catch((err) => {
      //   // jest.spyOn(window, 'alert').mockImplementation(() => {});
      //   // expect(alert('Contraseña incorrecta, intentalo de nuevo')).toEqual(window.alert());
      //   // expect(window.alert).toHaveBeenCalled(alert());
      //   expect(err.code).toEqual('auth/user-not-found');
      //   expect(window.alert.mockClear()).toHaveBeenCalledWith('Por favor registrate');
      //   expect(err).toBeCalled(window.alert);
      //   expect(window.alert.mockClear()).toHaveBeenCalled();
      // });
      //  });
  });
