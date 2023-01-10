import {
  newPostCollection, user, onGetPosts, onGetUsers, getUserLog, logOut, deletePost, updatePost,
  updateLikePost, disLikePost, order,
} from '../../firebase';

export const Wall = (onNavigate) => {
  const wallDiv = document.createElement('div');
  wallDiv.className = 'wallDiv';

  const logo = document.createElement('header');
  logo.setAttribute('id', 'logo');
  logo.innerText = '<LM>';

  const closeSesion = document.createElement('p');
  closeSesion.className = 'closeSesion';
  closeSesion.innerText = 'Cerrar Sesión';

  const userPlace = document.createElement('div');
  userPlace.className = 'userPlace';
  const imageGreaterThan = document.createElement('img');
  imageGreaterThan.src = '../Image/mayorque.png';
  imageGreaterThan.className = 'imagenMayor';

  const nameUser = document.createElement('h3');

  const imageLessThan = document.createElement('img');
  imageLessThan.src = '../Image/menorque.png';
  imageLessThan.className = 'imagenMayor';

  const textStart = document.createElement('p');
  textStart.className = 'textStart';
  textStart.innerText = 'Comparte tu canción o gustos musicales favoritos acá abajo y recibe muchos likes:';

  const imageGif = document.createElement('img');
  imageGif.className = 'imageGif';
  imageGif.src = '../Image/celebrar.gif';

  const formWall = document.createElement('form');
  formWall.className = 'formWall';

  const createPost = document.createElement('p');
  createPost.innerText = 'Crea una publicación';

  const post = document.createElement('textarea');
  post.className = 'post';
  post.placeholder = 'Hola, la canción que escuché ayer...';

  const buttonSubmitPost = document.createElement('button');
  buttonSubmitPost.className = 'buttonSubmitPost';
  buttonSubmitPost.innerText = 'Subir';

  const allPublications = document.createElement('h1');
  allPublications.className = 'allPublications';
  allPublications.innerText = 'Todas las publicaciones';

  const showPosts = document.createElement('div');
  showPosts.className = 'showPosts';

  logo.appendChild(closeSesion);

  userPlace.appendChild(imageGreaterThan);
  userPlace.appendChild(nameUser);
  userPlace.appendChild(imageLessThan);

  formWall.appendChild(createPost);
  formWall.appendChild(post);
  formWall.appendChild(buttonSubmitPost);

  wallDiv.appendChild(logo);
  wallDiv.appendChild(userPlace);
  wallDiv.appendChild(textStart);
  wallDiv.appendChild(imageGif);
  wallDiv.appendChild(formWall);
  wallDiv.appendChild(allPublications);
  wallDiv.appendChild(showPosts);

  user();
  const usersUid = localStorage.getItem('uidUsuario');
  console.log(usersUid);
  console.log(localStorage);
  onGetUsers((users) => {
    users.forEach((userss) => {
      if (userss.data().id === usersUid) {
        getUserLog(usersUid).then((user1) => {
          localStorage.setItem('userName', user1.data().user);
          nameUser.innerText = user1.data().user;
          console.log(user1.data());
          return user1.data();
        });
      }
    });
  });

  buttonSubmitPost.addEventListener('click', async (e) => {
    e.preventDefault();
    if (post.value !== '') {
      newPostCollection(post.value, localStorage.getItem('userName'), usersUid);
    }
  });

  onGetPosts((querySnapshot) => {
    order();
    console.log(order());
    console.log(querySnapshot);
    post.value = '';
    showPosts.innerHTML = '';
    querySnapshot.forEach((doc) => {
      console.log(order(doc.data()));
      const likesArray = doc.data().likes;
      const posts = doc.data();
      console.log(posts);
      const userName = doc.data().name;
      console.log(doc.data().post);
      console.log(doc.data().dateCreated);
      console.log(doc.data().likes);
      console.log(doc.data().name);
      console.log(doc.data().uid);
      console.log(doc.id);
      const uidUser = doc.data().uid;
      const postId = doc.id;
      const savePosts = document.createElement('div');
      savePosts.className = 'savePosts';
      const containerImageAndUserPosts = document.createElement('div');
      containerImageAndUserPosts.className = 'containerImageAndUserPosts';
      const containerUserPosts = document.createElement('div');
      containerUserPosts.className = 'containerUserPosts';
      const nameUserPosts = document.createElement('h3');
      nameUserPosts.innerText = userName;
      const containerImagePosts = document.createElement('div');
      containerImagePosts.className = 'containerImagePosts';
      const imageEditPosts = document.createElement('img');
      imageEditPosts.src = '../Image/edit.png';
      const imageDeletePosts = document.createElement('img');
      imageDeletePosts.src = '../Image/trash.png';

      const messagePosts = document.createElement('p');
      messagePosts.innerText = posts.post;
      messagePosts.setAttribute = ('class', 'messagePosts');

      const editPostDiv = document.createElement('div');
      editPostDiv.setAttribute('class', 'editPostDiv');
      const editPost = document.createElement('textarea');
      editPost.value = posts.post;
      const buttonEditPost = document.createElement('button');
      buttonEditPost.innerText = 'Editar Post';

      const likeDiv = document.createElement('div');
      likeDiv.classList = 'likeDiv';

      const imageLikePosts = document.createElement('img');
      imageLikePosts.className = 'imageLikePosts';
      imageLikePosts.src = likesArray.includes(usersUid) ? '../Image/Greenhearth.png' : '../Image/hearth.png';
      imageLikePosts.setAttribute('id', 'imageLikePosts');

      const counterLikesPost = document.createElement('p');
      counterLikesPost.innerText = likesArray.length;
      counterLikesPost.className = 'counterLikesPost';

      containerUserPosts.appendChild(nameUserPosts);
      containerImagePosts.appendChild(imageEditPosts);
      containerImagePosts.appendChild(imageDeletePosts);
      editPostDiv.appendChild(editPost);
      editPostDiv.appendChild(buttonEditPost);
      containerImageAndUserPosts.appendChild(containerUserPosts);
      containerImageAndUserPosts.appendChild(containerImagePosts);
      likeDiv.appendChild(counterLikesPost);
      likeDiv.appendChild(imageLikePosts);
      savePosts.appendChild(containerImageAndUserPosts);
      savePosts.appendChild(messagePosts);
      savePosts.appendChild(editPostDiv);
      savePosts.appendChild(likeDiv);
      showPosts.appendChild(savePosts);

      if (usersUid === uidUser) {
        containerImagePosts.classList.add('show');
      }

      imageEditPosts.addEventListener('click', () => {
        editPostDiv.classList.add('show');
      });

      // let counterLikes = 0;

      imageLikePosts.addEventListener('click', () => {
        if (likesArray.includes(usersUid)) {
          disLikePost(postId, usersUid)
            .then(() => {
              console.log('Quitamos tu like');
            })
            .catch((error) => console.log(error));
          imageLikePosts.src = '../Image/hearth.png';
        } else {
          updateLikePost(postId, usersUid)
            .then(() => {
              console.log('Apareció tu Like');
            })
            .catch((error) => console.log(error));
          imageLikePosts.src = '../Image/greenHearth.png';
        }
      });

      buttonEditPost.addEventListener('click', () => {
        console.log(doc.data().post);
        console.log(editPost.value);
        console.log(postId);
        updatePost(postId, editPost.value)
          .then(() => console.log('tu post fue Editado'))
          .catch((error) => console.log(error));
      });

      imageDeletePosts.addEventListener('click', () => {
        console.log(postId);
        if (window.confirm('¿Quieres borrar este post?')) {
          deletePost(postId)
            .then((user2) => {
              console.log('tu post fue borrado');
              return user2;
            })
            .catch((error) => console.log(error));
        }
      });
    });
  });

  closeSesion.addEventListener('click', () => {
    logOut();
    localStorage.clear();
    onNavigate('/');
  });

  return wallDiv;
};
