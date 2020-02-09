/* eslint-disable */
import {getPostList} from '../model/serverRequests';
import {Mediator} from'./mediator';
import {RightSideAuthorsView} from "./views/RightSideAuthorsView";
import {LeftSideAuthorsView} from "./views/LeftSideAuthorsView";

initialize();

function initialize() {
  const postAuthors = getAllAuthors();
  const allPosts = getPostList();
  const mediator = new Mediator();
  const rightSideAuthorsView = new RightSideAuthorsView(postAuthors, allPosts, mediator);
  const leftSideAuthorsView = new LeftSideAuthorsView(postAuthors, allPosts, mediator);

  render(leftSideAuthorsView, rightSideAuthorsView);
}

function render(leftSideAuthorsView, rightSideAuthorsView) {
  const mainEl = $('#content');
  const leftSide = document.createElement('section');
  const rightSide = document.createElement('aside');

  leftSide.className = 'articles__left-side';
  rightSide.className = 'articles__right-side';

  leftSide.append(leftSideAuthorsView.render());
  rightSide.append(rightSideAuthorsView.render());

  mainEl.append(leftSide, rightSide);
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
