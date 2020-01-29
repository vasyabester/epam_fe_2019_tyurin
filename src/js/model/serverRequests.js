/* eslint-disable */
import {createPostDueToType} from '../utils';

export function deletePost(elementToDelete) {
  const currentElement = JSON.parse(localStorage.getItem('selectedPost'));
  const URL = `http://127.0.0.1:3000/api/articles/${currentElement._id}`;
  const xhr = new XMLHttpRequest();

  console.log(currentElement);

  xhr.open('delete', URL);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(null);

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
      return;
    }

    if (xhr.status !== 200) {
      alert(JSON.parse(xhr.response).message);

      return;
    }

    elementToDelete.remove();
  };
}

export function addAbilityToDeleteAllPosts() {
  $('.header-ideas__delete-all-posts-button').on('click', function () {
    const URL = 'http://127.0.0.1:3000/api/articles';
    const xhr = new XMLHttpRequest();

    xhr.open('delete', URL);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(null);

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.status !== 200) {
        alert(JSON.parse(xhr.response).message);

        return;
      }

      window.location.href = './blog.html';
    };
  });
}

export function getPostList() {
  const xhr = new XMLHttpRequest();
  const URL = 'http://127.0.0.1:3000/api/articles';
  const postList = [];
  let response;

  xhr.open('GET', URL, false);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(null);

  if (xhr.status === 200) {
    response = JSON.parse(xhr.response);
  } else {
    alert(JSON.parse(xhr.response).message);
  }

  response.forEach((post) => {
    postList.push(createPostDueToType(post));
  });

  return postList;
}

export function getPost() {
  const currentID = localStorage.getItem('lastPostID');
  const xhr = new XMLHttpRequest();
  const URL = `http://127.0.0.1:3000/api/articles${currentID ? '/' + currentID : ''}`; // eslint-disable-line
  let post;

  xhr.open('GET', URL, false);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(null);

  if (xhr.status === 200) {
    const response = JSON.parse(xhr.response);
    post = currentID ? response : response[response.length - 1];
  } else {
    alert(JSON.parse(xhr.response).message);
  }

  localStorage.clear();

  return createPostDueToType(post); // eslint-disable-line
}


/* eslint-enable */
