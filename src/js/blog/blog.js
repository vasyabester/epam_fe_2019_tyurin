initialize();

/* eslint-disable */
function initialize() {
  const postList = getPostList();

  render(postList);
  addFilterByAuthorField();
  addFilterByTitleField();
}

function render(postList) {
  const contentEl = document.getElementById('content');

  renderBlogPosts(contentEl, postList);
  renderReadButton(contentEl);
  renderAddPostModalWindow();
  addDeleteButtonListener();
}

/* eslint-enable */

function getPostList() {
  const xhr = new XMLHttpRequest();
  const URL = 'http://127.0.0.1:3000/api/list';
  const postList = [];
  let response;

  xhr.open('GET', URL, false);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();

  if (xhr.status === 200) {
    response = JSON.parse(xhr.response);
  } else {
    alert(JSON.parse(xhr.response).message);
  }

  response.forEach((post) => {
    postList.push(createPostDueToType(post)); // eslint-disable-line
  });

  return postList;
}

function addFilterByAuthorField() {
  const searchByAuthorField = document.getElementsByClassName('blog__search')[0];
  const newEvent = new Event('input');

  searchByAuthorField.addEventListener('input', onSearchByAuthorFieldInput, false);
  searchByAuthorField.value = localStorage.getItem('filterByAuthor');
  searchByAuthorField.dispatchEvent(newEvent);
}

function addFilterByTitleField() {
  const searchByTitleField = document.getElementsByClassName('blog__search')[1];

  searchByTitleField.addEventListener('input', onSearchByTitleFieldInput, false);
}

function onSearchByAuthorFieldInput(event) {
  const blogNodes = document.getElementsByClassName('blog__item');
  const blogs = Object.assign([], blogNodes);

  blogs.forEach((blog) => {
    const nameAuthor = blog.querySelector('.blog__post-name').textContent;

    blog.hidden = isValueOutOfFilter(event.currentTarget.value, nameAuthor);
  });

  localStorage.setItem('filterByAuthor', event.currentTarget.value);
}

function onSearchByTitleFieldInput(event) {
  const blogNodes = document.getElementsByClassName('blog__item');
  const blogs = Object.assign([], blogNodes);

  blogs.forEach((blog) => {
    const nameTitle = blog.querySelector('.blog__post-article-header').textContent;

    blog.hidden = isValueOutOfFilter(event.currentTarget.value, nameTitle);
  });
}

function isValueOutOfFilter(inputValue, nameTitle) {
  const regex = RegExp(`${inputValue}`, 'gi');

  return !regex.test(nameTitle);
}
/* eslint-disable */
function addDeleteButtonListener() {
  const deleteButton = $('.blog__post-delete-button');

  deleteButton.on('click', () => {
    $('body').modalWindowPlugin({
      quantity: 2,
      type: 'info',
      message: 'Are you realy want to delete this post?',
    });
  });
}
/* eslint-enable */
