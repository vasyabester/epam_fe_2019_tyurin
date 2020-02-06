/* eslint-disable */
import {getPostList} from '../model/serverRequests';
import {rightButtonClicked, leftButtonClicked} from'./mediator';

function initialize() {
  const postAuthors = getAllAuthors();
  const allPosts = getPostList();
  render();
  appendAuthorsButtonsInTop(postAuthors, allPosts);
  appendAuthorsButtonsAside(postAuthors, allPosts);
}

function render() {
  const mainEl = $('#content');

  const leftSide = document.createElement('section');
  const rightSide = document.createElement('aside');

  leftSide.className = 'articles__left-side';
  rightSide.className = 'articles__right-side';

  mainEl.append(leftSide, rightSide);
}

initialize();

export function appendAuthorsButtonsInTop(postAuthors, allPosts) {
  const leftSide = $('.articles__left-side');
  const buttonContainer = document.createElement('section');

  buttonContainer.className = 'articles__button-container';

  postAuthors.forEach((postAuthor) => {
    let postsBySelectedAuthor = allPosts.filter(post => post.author === postAuthor);
    let postListEl = '';

    postsBySelectedAuthor.forEach((Post)=> {
      postListEl += `<div class="articles__post-title">${Post.title}</div>`;
    });

    const buttonEl = document.createElement('button');
    buttonEl.className = 'articles__button';
    buttonEl.innerHTML = postAuthor;
    buttonContainer.append(buttonEl);

    $(buttonEl).on("click", function (e, needToClick = true) {
      if (needToClick) {
        leftButtonClicked(e.target.innerText);
      }
    });

    buttonContainer.insertAdjacentHTML('beforeend',
      `
        <div class="articles__post-title-container">
          ${postListEl}
        </div>
    `);
  });

  leftSide.append(buttonContainer);
}

export function appendAuthorsButtonsAside(postAuthors, allPosts) {
  const rightSide = $('.articles__right-side');
  const buttonContainer = document.createElement('section');
  buttonContainer.className = 'articles__button-container';

  postAuthors.forEach((postAuthor) => {
    let postsBySelectedAuthor = allPosts.filter(post => post.author === postAuthor);
    let postListEl = '';

    postsBySelectedAuthor.forEach((Post)=> {
      postListEl += `<div class="articles__post-title">${Post.title}</div>`;
    });
    const buttonEl = document.createElement('button');
    buttonEl.className = 'articles__button articles__button--block';
    buttonEl.innerHTML = postAuthor;
    buttonContainer.append(buttonEl);

    $(buttonEl).on("click", function (e, needToClick = true) {
      if (needToClick) {
        rightButtonClicked(e.target.innerText);
      }
    });

    buttonContainer.insertAdjacentHTML('beforeend',
      `
        <div class="articles__post-title-container">
          ${postListEl}
        </div>
    `);
  });

  rightSide.append(buttonContainer);
}

function getAllAuthors() {
  const URL = 'http://127.0.0.1:3000/api/authors';
  const xhr = new XMLHttpRequest();

  xhr.open('get', URL, false);
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
  };

  return JSON.parse(xhr.response);
}

$(document).ready(function() {
  $('.articles__button-container .articles__button').on('click', addAccordeonBehavior);
});

function addAccordeonBehavior(){
  $('.articles__button-container .articles__post-title-container').not($(this).next()).slideUp(1000);
  $(this).next().slideToggle(2000);
}
/* eslint-enable */
