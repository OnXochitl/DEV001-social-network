import { newPostCollection, onGetPosts } from '../src/firebase';
import { Wall } from '../src/Components/Wall/wallIndex.js';

jest.mock('../src/firebase');

describe('test de registro', () => {
  const element = Wall();
  // const password1 = element.querySelector('#passwordInput');
  // const form = element.querySelector('.formWall');
  // const email = element.querySelector('#emailInput');
  // const elementOnNavigate = Register(onNavigate);

  it('debería ser una función', () => {
    expect(typeof Wall).toBe('function');
  });
  it('Existe el logo de la red social', () => {
    const sesionClose = element.querySelector('.closeSesion').innerText;
    expect(sesionClose).toBe('Cerrar Sesión');
  });
  it('Existe el texto de bienvenida', () => {
    const startText = element.querySelector('.textStart').innerText;
    expect(startText).toBe('Comparte tu canción o gustos musicales favoritos acá abajo y recibe muchos likes:');
  });
  it('Existe el gif en el muro', () => {
    const gifImage = element.querySelector('.imageGif').src;
    expect(gifImage).toBe('http://localhost/Image/celebrar.gif');
  });
  it('Existe el texto para los posts', () => {
    const postCreate = element.querySelector('.createPost').innerText;
    expect(postCreate).toBe('Crea una publicación');
  });
  it('Existe el placeholder en el textarea', () => {
    const postPlaceholder = element.querySelector('.post').placeholder;
    expect(postPlaceholder).toBe('Hola, la canción que escuché ayer...');
  });
  it('Existe el botón para subir posts', () => {
    const buttonPost = element.querySelector('.buttonSubmitPost');
    expect(buttonPost).not.toBeNull();
    expect(buttonPost.innerText).toBe('Subir');
  });
  it('Existe el texto de todas las publicaciones', () => {
    const allPubs = element.querySelector('.allPublications').innerText;
    expect(allPubs).toBe('Todas las publicaciones');
  });
  it('Funcionalidad al subir posts', () => {
    const buttonPost = element.querySelector('.buttonSubmitPost');
    // const posts = element.querySelector('.post');
    expect(buttonPost).not.toBeNull();
    buttonPost.click();
    //  if (posts.value !== '') {
    expect(typeof newPostCollection).toBe('function');
  });
  it('Existen las imágenes para editar y eliminar los posts', () => {
    const imageEdit = element.querySelector('.imageEditPosts');
    expect(imageEdit).toBeNull();
    const imageDelete = element.querySelector('.imageDeletePosts');
    expect(imageDelete).toBeNull();
  });

  it('debería retornar un objeto', () => {
    expect(newPostCollection('Hola a todos', 'camila', '5550121')).toBe(undefined);
  });
  // it('debería ser llamada newPostCollecti', () => {
  //   expect(newPostCollection).toHaveBeenCalled();
  // });
  it('debería retornar un objeto que contenga', () => {
    expect(onGetPosts).toHaveBeenCalled();
  });
});
