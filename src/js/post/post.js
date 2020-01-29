import {getMockedJson} from '../utils';
import {renderAddPostModalWindow} from '../addPostModalWindowView';
import {renderPostLeft} from './postLeftView';
import {renderPostRight} from './postRightView';
import {getPost} from '../model/serverRequests';

import '../newPostController';

/* eslint-disable */
function render() {
  console.log('**************');
  const post = getPost();
  const contentEl = document.getElementById('content');
  const data = getMockedJson();

  console.log('!!!!!!!!!!!!!!!!!!!');

  renderPostLeft(contentEl, post);
  renderPostRight(contentEl, data);
  renderAddPostModalWindow();
}

render();

function renderFormData(post) {
  const postInfoName = document.querySelectorAll('.post__info-name')[0];
  postInfoName.textContent = post.author;

  const datePost = document.querySelector('.post__info-message');
  datePost.textContent = post.date;
}
/* eslint-enable */
