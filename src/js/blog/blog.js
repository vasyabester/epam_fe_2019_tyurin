import {displayMainContent} from './blogPostsView';
import {renderReadButton} from './blogReadButtonView';
import {renderAddPostModalWindow} from '../addPostModalWindowView';
import {deletePost, addAbilityToDeleteAllPosts, getPostList} from '../model/serverRequests';

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

  displayMainContent(contentEl, postList);
  renderReadButton(contentEl);
  renderAddPostModalWindow();
  addDeleteButtonListener();
}

function addFilterByAuthorField() {
  const searchByAuthorField = document.getElementsByClassName('blog__search')[0];
  const newEvent = new Event('input');
  if (searchByAuthorField) {
    searchByAuthorField.addEventListener('input', onSearchByAuthorFieldInput, false);
    searchByAuthorField.value = localStorage.getItem('filterByAuthor');
    searchByAuthorField.dispatchEvent(newEvent);
  }
}

function addFilterByTitleField() {
  const searchByTitleField = document.getElementsByClassName('blog__search')[1];
  if(searchByTitleField) {
    searchByTitleField.addEventListener('input', onSearchByTitleFieldInput, false);
  }
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

function addDeleteButtonListener() {
  const deleteButton = $('.blog__post-delete-button');

  deleteButton.on('click', (event) => {
    const clickedDeleteButtonForCurrentPost = event.currentTarget;
    const postElement = $(clickedDeleteButtonForCurrentPost).parents(".blog__item");

    $('body').modalWindowPlugin({
      quantity: 2,
      type: 'info',
      message: 'Are you realy want to delete this post?',
      onOkButtonClick: function () {
        deletePost(postElement);
      }
    });
  });
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
/* eslint-enable */
