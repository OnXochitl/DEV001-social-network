import { googleRegister, newUserCollection, registerEmailAndPassword } from '../../firebase';
import { validate } from './registerValidate';
// eslint-disable-next-line import/no-cycle

export const Register = (onNavigate) => {
  const register = document.createElement('section');
  register.setAttribute('id', 'register');

  const Home = document.createElement('form');
  Home.setAttribute('id', 'home');

  const title = document.createElement('h1');
  title.innerText = '<Laboratorians Music>';
  title.id = 'title';

  const welcome = document.createElement('p');
  welcome.innerText = 'Regístrate para compartir música con la comunidad de Laboratoria.';

  const userDiv = document.createElement('div');
  const user = document.createElement('label');
  user.innerText = 'Nombre';

  const userInput = document.createElement('input');
  userInput.setAttribute('name', 'user');
  userInput.setAttribute('required', '');
  userInput.ariaRequired = 'rellena este campo';
  userInput.placeholder = 'Ingresa tu nombre';
  userInput.id = 'userInput';
  userInput.setAttribute('class', 'inputForm');
  const errorUser = document.createElement('h6');
  errorUser.innerText = 'El nombre debe tener entre 3 y 16 caracteres, puede contener números, _ y - .';
  errorUser.setAttribute('class', 'error');
  errorUser.setAttribute('id', 'message-error-user-1');

  const emailDiv = document.createElement('div');
  const email = document.createElement('label');
  email.innerText = 'Correo';

  const emailInput = document.createElement('input');
  emailInput.setAttribute('class', 'inputForm');
  emailInput.setAttribute('name', 'email1');
  emailInput.setAttribute('required', '');
  emailInput.placeholder = 'Ingresa tu correo';
  emailInput.id = 'emailInput';
  emailInput.setAttribute('type', 'email');
  const errorEmail = document.createElement('h6');
  errorEmail.innerText = 'Ejemplo: example@correo.com';
  errorEmail.setAttribute('class', 'error');
  errorEmail.setAttribute('id', 'message-error-mail-1');

  const emailInput2 = document.createElement('input');
  emailInput2.setAttribute('class', 'inputForm');
  emailInput2.setAttribute('name', 'email2');
  emailInput2.setAttribute('required', '');
  emailInput2.placeholder = 'Válida tu correo';
  emailInput2.id = 'emailInput2';
  emailInput2.setAttribute('type', 'email');
  const errorEmail2 = document.createElement('h6');
  errorEmail2.innerText = 'Ambos correos deben ser iguales';
  errorEmail2.setAttribute('class', 'error');
  errorEmail2.setAttribute('id', 'message-error-mail-2');

  const passwordDiv = document.createElement('div');
  const password = document.createElement('label');
  password.innerText = 'Contraseña';

  const passwordInput = document.createElement('input');
  passwordInput.setAttribute('class', 'inputForm');
  passwordInput.setAttribute('required', '');
  passwordInput.placeholder = 'Ingresa tu contraseña';
  passwordInput.id = 'passwordInput';
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('name', 'password1');
  const errorPassword = document.createElement('h6');
  errorPassword.innerText = 'La contraseña debe tener entre 6 y 16 caracteres, puede contener números, _ y - .';
  errorPassword.setAttribute('class', 'error');
  errorPassword.setAttribute('id', 'message-error-password-1');

  const passwordInput2 = document.createElement('input');
  passwordInput2.setAttribute('required', '');
  passwordInput2.setAttribute('class', 'inputForm');
  passwordInput2.setAttribute('name', 'password2');
  passwordInput2.placeholder = 'Válida tu contraseña';
  passwordInput2.id = 'passwordInput2';
  passwordInput2.setAttribute('type', 'password');
  const errorPassword2 = document.createElement('h6');
  errorPassword2.innerText = 'Ambas contraseñas deben ser iguales';
  errorPassword2.setAttribute('class', 'error');
  errorPassword2.setAttribute('id', 'message-error-password-2');

  const buttonRegister = document.createElement('button');
  buttonRegister.innerText = 'Registrarse';
  buttonRegister.id = 'registerButton';

  const buttonGoogle = document.createElement('button');
  const image = document.createElement('img');
  image.src = 'https://andigarcia.com/wp-content/uploads/2020/04/Google-Logo-Fondo-negro.jpg';
  buttonGoogle.innerText = 'Ingresa con Google';
  buttonGoogle.setAttribute('id', 'buttonGoogle');

  // buttonGoogle.addEventListener('click', async (e) => {
  // try {
  // await registroGoogle();
  // } catch (error) {}
  // });
  buttonGoogle.appendChild(image);

  userDiv.appendChild(user);
  userDiv.appendChild(userInput);
  userDiv.appendChild(errorUser);

  emailDiv.appendChild(email);
  emailDiv.appendChild(emailInput);
  emailDiv.appendChild(errorEmail);
  emailDiv.appendChild(emailInput2);
  emailDiv.appendChild(errorEmail2);

  passwordDiv.appendChild(password);
  passwordDiv.appendChild(passwordInput);
  passwordDiv.appendChild(errorPassword);
  passwordDiv.appendChild(passwordInput2);
  passwordDiv.appendChild(errorPassword2);

  Home.appendChild(userDiv);
  Home.appendChild(emailDiv);
  Home.appendChild(passwordDiv);
  Home.appendChild(buttonRegister);
  Home.appendChild(buttonGoogle);
  // Home.appendChild(buttonGoogle);
  register.appendChild(title);
  register.appendChild(welcome);
  register.appendChild(Home);

  const inputs = Home.querySelectorAll('input');
  inputs.forEach((input, index) => {
    const messageError = Home.querySelectorAll('h6')[index].id;
    input.addEventListener('keyup', () => {
      validate(input.name, input.value, messageError);
    });
    input.addEventListener('blur', () => {
      validate(input.name, input.value, messageError);
    });
  });

  Home.addEventListener('submit', (e) => {
    e.preventDefault();

    // TODO: antes de llamar a registerClick, deben validar los inputs

    registerEmailAndPassword(emailInput.value, emailInput.value)
      .then((UserCredential) => {
        console.log(UserCredential.user.uid);
        const userID = UserCredential.user.uid;
        onNavigate('/login');
        newUserCollection(userID, userInput.value, emailInput.value, passwordInput.value);
      });
    /*
    .then(() => onNavigate('/login'));
    alert('Te hemos enviado un correo de verificación');
    sendEmailVerification(auth.currentUser);
    onNavigate('/login');
    verificarEmail();
    newUserCollection(userInput.value, correoInput.value, contraseñaInput.value);
    inputForm();
    */
  });

  buttonGoogle.addEventListener('click', () => {
    onNavigate('/login');
    googleRegister()
      .then((credenciales) => {
        console.log(credenciales);
      })
      .catch((error) => console.log(error));
  });
  // console.log(inputs);
  // console.log(inputForm);
  return register;
};
