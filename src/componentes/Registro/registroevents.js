/* eslint-disable no-console */
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase.js';
//import { collection, addDoc } from 'firebase/firestore';

// import { Register } from '/componentes/Registro/registroindex.js';

// const registroButton = document.getElementById('home');np
export const registerClick = (correoInput, contraseñaInput) => {
  // e.preventDefa   ult();

  const email = correoInput.value;
  const contraseña = contraseñaInput.value;

  console.log(email, contraseña);

  createUserWithEmailAndPassword(auth, email, contraseña)
    .then((userCredentials) => {
      console.log(userCredentials.user);
      return userCredentials.user;
    })

    .catch((error) => console.log(error));
};

export const googleClick = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((credenciales) => {
      console.log(credenciales);
    })
    .catch((error) => console.log(error));
};

// export const datosUsuario = (userInput, correoInput, contraseñaInput) => {
//   const usuario = userInput.value;
//   const email = correoInput.value;
//   const contraseña = contraseñaInput.value;

//   .then ( () => {
//     const docRef = addDoc(collection(database, 'users'), {
//       Usuario: usuario,
//       Correo: email,
//       Contraseña: contraseña,
//   });
//     console.log('Document written with ID: ', docRef.id);
//   })
//   .catch((error) => console.log(error));
// };

// export const google = async () => {
//   const provider = new GoogleAuthProvider();

//   try {
//     const credenciales = await signInWithPopup(auth, provider);
//     console.log(credenciales);
//   } catch (error) { console.log(error); }
// };

// export const datosUsuario = (userInput, correoInput, contraseñaInput) => {
//   const usuario = userInput.value;
//   const email = correoInput.value;
//   const contraseña = contraseñaInput.value;

//   try {
//     const docRef = addDoc(collection(database, 'users'), {
//       Usuario: usuario,
//       Correo: email,
//       Contraseña: contraseña,
//     });
//     console.log(usuario, email, contraseña);
//     console.log('Document written with ID: ', docRef);
//   } catch (e) {
//     console.error('Error adding document: ', e);
//   }

// };
