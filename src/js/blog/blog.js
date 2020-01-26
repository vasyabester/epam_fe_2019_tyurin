import {createPostDueToType} from '../utils';
import {renderBlogPosts} from './blogPostsView';
import {renderReadButton} from './blogReadButtonView';
import {renderAddPostModalWindow} from '../addPostModalWindowView';

import '../newPostController';
import '../myJQueryModalPlugin/main';

initialize();

/* eslint-disable */
function initialize() {
  const postList = getPostList();

  render(postList);
  addFilterByAuthorField();
  addFilterByTitleField();
  addEditAbility();
  clearAddNewPostWindowOnOpen();
  addAbilityToDeleteAllPosts();
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
  const URL = 'http://127.0.0.1:3000/api/articles';
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
      onOkButtonClick: deletePost
    });
  });
}

function deletePost() {
  const currentElement = JSON.parse(localStorage.getItem('selectedPost'));
  const URL = `http://127.0.0.1:3000/api/articles/${currentElement.id}`;
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
}

function addEditAbility() {
  const editButton = $('.blog__post-edit-button');


  editButton.on('click', function () {
    setTimeout(function () {
      const currentElement = JSON.parse(localStorage.getItem('selectedPost'));

      $('#img').attr('disabled', true)
        .val(currentElement.img);

      $('#title').attr('disabled', true)
        .val(currentElement.title);

      $('#author').attr('disabled', true)
        .val(currentElement.author);

      $('#date').attr('disabled', true)
        .val(currentElement.date);

      $('#text').val(currentElement.text);

      $('#quote').attr('disabled', true)
        .val(currentElement.quote);
    }, 10);
  });
}

function clearAddNewPostWindowOnOpen() {
$('.header-ideas__add-post-button').on('click', function () {
  $('#img').attr('disabled', false)
    .val('');

  $('#title').attr('disabled', false)
    .val('');

  $('#author').attr('disabled', false)
    .val('');

  $('#date').attr('disabled', false)
    .val('');

  $('#text').val('');

  $('#quote').attr('disabled', false)
    .val('');

  localStorage.setItem('selectedPost', '');
});}


function addAbilityToDeleteAllPosts() {
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
/* eslint-enable */
