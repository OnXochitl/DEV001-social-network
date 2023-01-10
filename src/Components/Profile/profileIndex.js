import { logOut } from '../../firebase';

export const Profile = (onNavigate) => {
  const registerProfile = document.createElement('div');
  registerProfile.className = 'registerProfile';

  const logo = document.createElement('header');
  logo.setAttribute('id', 'logo');
  logo.innerText = '<LM>';

  const containerImage = document.createElement('div');
  containerImage.className = 'containerImage';

  const imageOne = document.createElement('img');
  imageOne.src = '../Image/mayorque.png';

  const inputImage = document.createElement('input');
  inputImage.className = 'inputImage';
  inputImage.setAttribute('type', 'file');

  const imageTwo = document.createElement('img');
  imageTwo.src = '../Image/menorque.png';

  const divFirst = document.createElement('div');

  const hello = document.createElement('p');
  hello.innerText = 'Hola,';
  const nameUser = document.createElement('p');
  nameUser.innerText = '<Usuario> <Usuario>';
  const emailUser = document.createElement('p');
  emailUser.innerText = '';
  const continueRegister = document.createElement('p');
  continueRegister.innerText = 'Continua con tu registro:';

  const registerFinish = document.createElement('form');
  registerFinish.className = 'registerFinish';
  const userNameDiv = document.createElement('div');
  const userName = document.createElement('label');
  userName.innerText = 'UserName';
  const userNameInput = document.createElement('input');
  userNameInput.placeholder = 'Inserta tu UserName';

  const userDescriptionDiv = document.createElement('div');
  const userDescription = document.createElement('label');
  userDescription.innerText = 'Acerca de ti';
  const userDescriptionInput = document.createElement('textarea');
  userDescriptionInput.placeholder = 'Me gusta el rock y...';

  const buttonWall = document.createElement('button');
  buttonWall.innerText = 'Finalizar Registro';

  containerImage.appendChild(imageOne);
  containerImage.appendChild(inputImage);
  containerImage.appendChild(imageTwo);

  divFirst.appendChild(hello);
  divFirst.appendChild(nameUser);
  divFirst.appendChild(emailUser);
  divFirst.appendChild(continueRegister);

  userNameDiv.appendChild(userName);
  userNameDiv.appendChild(userNameInput);

  userDescriptionDiv.appendChild(userDescription);
  userDescriptionDiv.appendChild(userDescriptionInput);

  registerFinish.appendChild(userNameDiv);
  registerFinish.appendChild(userDescriptionDiv);
  registerFinish.appendChild(buttonWall);

  registerProfile.appendChild(logo);
  registerProfile.appendChild(containerImage);
  registerProfile.appendChild(divFirst);
  registerProfile.appendChild(registerFinish);

  buttonWall.addEventListener('click', () => {
    logOut();
    localStorage.clear();
    onNavigate('/');
  });
  return registerProfile;
};
