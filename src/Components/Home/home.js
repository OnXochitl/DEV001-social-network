export const Home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDiv';

  const title = document.createElement('h1');
  title.innerText = '<Laboratorians Music>';
  title.id = 'title';

  const messageP = document.createElement('p');
  messageP.innerText = 'Inicia sesión o regístrate para compartir música con la comunidad de Laboratoria';
  messageP.className = 'messageP';

  const containerGifAndButtons = document.createElement('div');
  containerGifAndButtons.setAttribute('class', 'containerGifAndButtons');

  const imageHomeGif = document.createElement('img');
  imageHomeGif.src = 'https://raw.githubusercontent.com/nicole11robayo/DEV001-social-network/Registro/src/Image/emocion.gif';
  imageHomeGif.setAttribute('class', 'imageHomeGif');

  const homeButtons = document.createElement('div');
  homeButtons.className = 'homeButtons';

  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'buttonLogin';
  buttonLogin.innerText = 'Inicia sesión';

  const buttonRegister = document.createElement('button');
  buttonRegister.className = 'buttonRegister';
  buttonRegister.innerText = 'Regístrate';

  containerGifAndButtons.appendChild(imageHomeGif);
  containerGifAndButtons.appendChild(homeButtons);

  homeButtons.appendChild(buttonLogin);
  homeButtons.appendChild(buttonRegister);

  homeDiv.appendChild(title);
  homeDiv.appendChild(messageP);
  homeDiv.appendChild(containerGifAndButtons);

  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/login');
  });

  buttonRegister.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/register');
  });

  return homeDiv;
};
