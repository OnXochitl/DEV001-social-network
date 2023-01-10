// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import { Profile } from './Components/Profile/profileIndex.js';
import { Register } from './Components/Register/registerIndex.js';
import { Login } from './Components/Login/loginIndex.js';
import { Wall } from './Components/Wall/wallIndex.js';
import { Home } from './Components/Home/home.js';

const rootDiv = document.getElementById('root');

let routes = {};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname]);
};

routes = {
  '/': Home(onNavigate),
  '/register': Register(onNavigate),
  '/profile': Profile(onNavigate),
  '/login': Login(onNavigate),
  '/wall': Wall(onNavigate),
};

const componente = () => routes[window.location.pathname];
rootDiv.appendChild(componente());

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(componente());
};
