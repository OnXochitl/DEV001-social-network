import { Home } from '../src/Components/Home/home.js';

describe('test de login', () => {
  const element = Home();
  const buttonRegister = element.querySelector('.buttonRegister');
  const buttonLogin = element.querySelector('.buttonLogin');

  it('debería ser una función', () => {
    expect(typeof Home).toBe('function');
  });
  it('Existe el boton para llevarte a registrar', () => {
    expect(buttonRegister).not.toBeNull();
  });
  it('Existe el boton para llevarte iniciar sesion', () => {
    expect(buttonLogin).not.toBeNull();
  });
});
