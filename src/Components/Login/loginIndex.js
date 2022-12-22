import { loginEmailAndPassword, googleRegister, user } from '../../firebase';

export const Login = (onNavigate) => {
  const login = document.createElement('section');
  login.setAttribute('id', 'login');

  const Home = document.createElement('form');
  Home.setAttribute('id', 'home');

  const title = document.createElement('h1');
  title.innerText = '<Laboratorians Music>';
  title.id = 'title';

  const welcome = document.createElement('p');
  welcome.innerText = 'Inicia sesión para compartir música con la comunidad de Laboratoria.';

  const containerImageAndLogin = document.createElement('div');
  containerImageAndLogin.setAttribute('class', 'containerImageAndLogin');

  const imageLogin = document.createElement('img');
  imageLogin.src = 'https://raw.githubusercontent.com/nicole11robayo/DEV001-social-network/Registro/src/Image/loginLab.jpeg';
  imageLogin.setAttribute('class', 'registerLab');

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

  const passwordDiv = document.createElement('div');
  const password = document.createElement('label');
  password.innerText = 'Contraseña';

  const divPassword = document.createElement('div');
  divPassword.setAttribute('class', 'divPassword');

  const passwordInput = document.createElement('input');
  passwordInput.setAttribute('class', 'inputForm');
  passwordInput.setAttribute('required', '');
  passwordInput.placeholder = 'Ingresa tu contraseña';
  passwordInput.setAttribute('id', 'passwordInput');
  passwordInput.setAttribute('type', 'password');
  passwordInput.setAttribute('name', 'password1');

  const imageEye = document.createElement('img');
  imageEye.src = 'https://github.com/nicole11robayo/DEV001-social-network/blob/Registro/src/Image/eye-solid.svg';
  imageEye.setAttribute('id', 'imageEye');

  const buttonRegister = document.createElement('button');
  buttonRegister.innerText = 'Inicia sesión';
  buttonRegister.id = 'registerButton';

  const buttonGoogle = document.createElement('button');
  const image = document.createElement('img');
  image.src = 'https://andigarcia.com/wp-content/uploads/2020/04/Google-Logo-Fondo-negro.jpg';
  buttonGoogle.innerText = 'Ingresa con Google';
  buttonGoogle.setAttribute('id', 'buttonGoogle');

  const divAccount = document.createElement('div');
  divAccount.className = 'divAccount';

  const notHaveAccount = document.createElement('h3');
  notHaveAccount.innerText = '¿No tienes cuenta?';
  notHaveAccount.className = 'notHaveAccount';
  const register = document.createElement('h3');
  register.innerText = 'Regístrate';
  register.className = 'register';

  // buttonGoogle.addEventListener('click', async (e) => {
  // try {
  // await registroGoogle();
  // } catch (error) {}
  // });
  buttonGoogle.appendChild(image);

  emailDiv.appendChild(email);
  emailDiv.appendChild(emailInput);

  divPassword.appendChild(passwordInput);
  divPassword.appendChild(imageEye);

  passwordDiv.appendChild(password);
  passwordDiv.appendChild(divPassword);

  divAccount.appendChild(notHaveAccount);
  divAccount.appendChild(register);

  Home.appendChild(emailDiv);
  Home.appendChild(passwordDiv);
  Home.appendChild(buttonRegister);
  Home.appendChild(buttonGoogle);
  Home.appendChild(divAccount);
  // Home.appendChild(buttonGoogle);
  containerImageAndLogin.appendChild(imageLogin);
  containerImageAndLogin.appendChild(Home);

  login.appendChild(title);
  login.appendChild(welcome);
  login.appendChild(containerImageAndLogin);

  Home.addEventListener('submit', (e) => {
    e.preventDefault();

    // TODO: antes de llamar a registerClick, deben validar los inputs
    loginEmailAndPassword(emailInput.value, passwordInput.value)
      .then(() => {
        // console.log(userCrendentials.user);
        onNavigate('/wall');
        // eslint-disable-next-line no-restricted-globals
        location.reload();
        user();
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Contraseña incorrecta, intentalo de nuevo');
        } else if (errorCode === 'auth/user-not-found') {
          alert('Por favor registrate');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
    // verificarEmail();
    // datosUsuario(userInput.value, correoInput.value, contraseñaInput.value);
    // inputForm();
  });

  imageEye.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      imageEye.src = 'https://github.com/nicole11robayo/DEV001-social-network/blob/Registro/src/Image/eye-slash-solid.svg';
    } else {
      passwordInput.type = 'password';
      imageEye.src = 'https://github.com/nicole11robayo/DEV001-social-network/blob/Registro/src/Image/eye-solid.svg';
    }
  });

  buttonGoogle.addEventListener('click', () => {
    googleRegister();
    onNavigate('/wall');
    user();
  });

  // console.log(inputs);
  // console.log(inputForm);

  register.addEventListener('click', () => {
    onNavigate('/register');
  });

  return login;
};
