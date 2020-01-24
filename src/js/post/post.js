import {createPostDueToType, getMockedJson} from '../utils';
import {renderAddPostModalWindow} from '../addPostModalWindowView';
import {renderPostLeft} from './postLeftView';
import {renderPostRight} from './postRightView';

import '../newPostController';

/* eslint-disable */
function render() {
  const post = getPost();
  const contentEl = document.getElementById('content');
  const data = getMockedJson();

  renderPostLeft(contentEl, post);
  renderPostRight(contentEl, data);
  renderAddPostModalWindow();
}
/* eslint-enable */
render();

function getPost() {
  const currentID = localStorage.getItem('lastPostID');
  const xhr = new XMLHttpRequest();
  const URL = `http://127.0.0.1:3000/api/list${currentID ? '/' + currentID : ''}`; // eslint-disable-line
  let post;

  xhr.open('GET', URL, false);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();

  if (xhr.status === 200) {
    const response = JSON.parse(xhr.response);
    post = currentID ? response : response[response.length - 1];
  } else {
    alert(JSON.parse(xhr.response).message);
  }

  localStorage.clear();

  return createPostDueToType(post); // eslint-disable-line
}

/* eslint-disable */
function renderFormData(post) {
  const postInfoName = document.querySelectorAll('.post__info-name')[0];
  postInfoName.textContent = post.author;

  const datePost = document.querySelector('.post__info-message');
  datePost.textContent = post.date;
}
/* eslint-enable */
