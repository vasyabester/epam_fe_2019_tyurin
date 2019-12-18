/* eslint-disable */
function render() {
  const post = getPost(getLastPostID());
  console.log(post);

  const contentEl = document.getElementById('content');
  const data = getMockedJson();
  renderPostLeft(contentEl, data, post);
  renderPostRight(contentEl, data);
  renderAddPostModalWindow();
}
/* eslint-enable */
render();

function getPost(id) {
  const URL = `http://127.0.0.1:3000/api/list/${id}`;
  const xhr = new XMLHttpRequest();
  let response;

  xhr.open('GET', URL, false);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();

  if (xhr.status === 200) {
    response = JSON.parse(xhr.response);
  } else {
    alert(JSON.parse(xhr.response).message);
  }

  return response;
}

function getLastPostID() {
  const URL = 'http://127.0.0.1:3000/api/list';
  const xhr = new XMLHttpRequest();
  let postsList;

  xhr.open('GET', URL, false);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();

  if (xhr.status === 200) {
    postsList = JSON.parse(xhr.response);
  } else {
    alert(JSON.parse(xhr.response).message);
  }

  const currentID = postsList[postsList.length - 1].id;

  return currentID;
}
/* eslint-disable */
function renderFormData(post) {
  const postInfoName = document.querySelectorAll('.post__info-name')[0];
  postInfoName.textContent = post.author;

  const datePost = document.querySelector('.post__info-message');
  datePost.textContent = post.date;
}
/* eslint-enable */
