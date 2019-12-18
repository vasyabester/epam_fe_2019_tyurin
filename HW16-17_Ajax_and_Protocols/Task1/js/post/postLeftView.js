/* eslint-disable */
function renderPostLeft(contentEl, data, post) {
  const sectionEl = document.createElement('section');
  sectionEl.className = 'post__left';

  const postHeader = document.createElement('h1');
  postHeader.className = 'post-header';
  postHeader.textContent = post.title;

  const postInfo = document.createElement('div');
  postInfo.className = 'post__info';

  postInfo.append(makePostInfoContainer(data, post));

  const postImage = document.createElement('img');
  postImage.className = 'post__image';
  postImage.src = post.img;
  postImage.alt = 'Here must be an image';

  sectionEl.append(
    postHeader,
    postInfo,
    postImage,
    makeContainerTrackEl(data),
    makePostLeftArticleEl(post),
    makePostLeftItemsContainerEl(data),
    makeMoreCommentsEl()
  );

  contentEl.append(sectionEl);
}
/* eslint-enable */
function makeMoreCommentsEl() {
  const moreComments = document.createElement('div');
  moreComments.className = 'more-comments';

  const moreCommentsButton = document.createElement('button');
  moreCommentsButton.className = 'more-comments__button';
  moreCommentsButton.textContent = 'More comments';
  moreComments.append(moreCommentsButton);

  return moreComments;
}

function makePostLeftItemsContainerEl(data) {
  const postLeftItemsContainer = document.createElement('div');
  postLeftItemsContainer.className = 'post__left-items-container';

  const postLeftLikes = document.createElement('span');
  postLeftLikes.className = 'post__left-likes';

  const postLeftLikesCounter = document.createElement('p');
  postLeftLikesCounter.className = 'post__left-likes-counter';
  postLeftLikesCounter.textContent = `${data.blogPosts[1].likes} likes`;

  const postLeftLine = document.createElement('hr');
  postLeftLine.className = 'post__left-line';

  const comments = makeComments(data);

  postLeftItemsContainer.append(
    postLeftLikes,
    postLeftLikesCounter,
    makeNetworkContainer(),
    postLeftLine,
    comments
  );

  return postLeftItemsContainer;
}

function makeComments(data) {
  const comments = document.createElement('div');
  comments.className = 'class';

  const postLeftCommentsHeader = document.createElement('h1');
  postLeftCommentsHeader.className = 'post__left-comments-header';
  postLeftCommentsHeader.textContent = 'Reviews';
  comments.append(postLeftCommentsHeader);

  data.blogPosts[1].commentsList.forEach((comment) => {
    comments.append(makeComment(comment));
  });

  return comments;
}

function makePostLeftArticleEl(post) {
  const postLeftArticle = document.createElement('article');

  postLeftArticle.className = 'post__left-article';
  postLeftArticle.insertAdjacentHTML('beforeend',
    `<article class="post__left-article">${post.postDescr}</article>
        <div class="post__left-notes-container">
          <p class="post__left-notes-text">${post.quote}</p>
        </div>`
  );

  return postLeftArticle;
}

function makePostInfoContainer(data, post) {
  const postInfoContainer = document.createElement('div');
  postInfoContainer.className = 'post__info-container';

  const postInfoAvatar = document.createElement('span');
  postInfoAvatar.className = 'post__info-avatar';
  postInfoContainer.append(postInfoAvatar);

  const postInfoDataContainer = document.createElement('div');
  postInfoDataContainer.className = 'post__info-data-container';
  postInfoContainer.append(postInfoDataContainer);

  const postInfoName = document.createElement('div');
  postInfoName.className = 'post__info-name';
  postInfoName.textContent = post.author;
  postInfoDataContainer.append(postInfoName);

  postInfoDataContainer.append(makeInfoMessageContainer(data, post));

  return postInfoContainer;
}

function makeInfoMessageContainer(data, post) {
  let stars = '';
  data.blogPosts[1].stars.forEach((star) => {
    stars += `<span class="post__info-message-${star}-star-icon"></span>`;
  });

  const postInfoMessageContainer = document.createElement('div');
  postInfoMessageContainer.className = 'post__info-message-container';
  postInfoMessageContainer.insertAdjacentHTML('beforeend',
    `<span class="post__info-message">${post.date}</span>
     <span class="post__info-message">&#8226;</span>
     <span class="post__info-message">${data.blogPosts[1].timeRead}</span>
     <span class="post__info-message">&#8226;</span>
     <span class="post__info-message-icon"></span>
     <span class="post__info-message">${data.blogPosts[1].comments}</span>
     ${stars}`
  );

  return postInfoMessageContainer;
}

function makeContainerTrackEl(data) {
  const postContainerTrack = document.createElement('audio');
  postContainerTrack.className = 'post__img-container-track';
  postContainerTrack.controls;
  postContainerTrack.textContent = 'Your browser does not support tag audio.';

  const audioMusic = document.createElement('source');
  audioMusic.src = data.blogPosts[1].content.src;
  audioMusic.type = 'audio/mp3';
  postContainerTrack.append(audioMusic);

  return postContainerTrack;
}

function makeNetworkContainer() {
  const postLeftNetworkContainer = document.createElement('div');
  postLeftNetworkContainer.className = 'post__left-networks-container';

  const postLeftFacebook = document.createElement('a');
  postLeftFacebook.className = 'post__left-facebook';
  postLeftNetworkContainer.append(postLeftFacebook);

  const postLeftBall = document.createElement('a');
  postLeftBall.className = 'post__left-ball';
  postLeftNetworkContainer.append(postLeftBall);

  const postLeftInstagramm = document.createElement('a');
  postLeftInstagramm.className = 'post__left-instagram';
  postLeftNetworkContainer.append(postLeftInstagramm);

  return postLeftNetworkContainer;
}

function makeComment(comment) {
  const commentsContainer = document.createElement('div');
  commentsContainer.className = 'comments-container';

  const commentsContainerReview = document.createElement('span');
  commentsContainerReview.className = `comments-container__${comment.class}-review`;

  const commentsContainerItem = document.createElement('article');
  commentsContainerItem.className = 'comments-container__item';

  commentsContainer.append(commentsContainerReview, commentsContainerItem);
  commentsContainerItem.append(makeCommentHeader(comment));

  const commentsContainerItemText = document.createElement('p');
  commentsContainerItemText.className = 'comments-container__item-text';
  commentsContainerItemText.textContent = comment.text;
  commentsContainerItem.append(commentsContainerItemText);

  comment.readStatus && commentsContainerItem.append(makeCommentContainerReadStatus(comment));

  return commentsContainer;
}

function makeCommentHeader(comment) {
  const commentsContainerHeader = document.createElement('div');
  commentsContainerHeader.className = 'comments-container__header';

  let stars = '';
  comment.stars.forEach((star) => {
    stars += `<span class="post__info-message-${star}-star-icon"></span>`;
  });

  commentsContainerHeader.insertAdjacentHTML('beforeend',
    `<h2 class="comments-container__header-name">${comment.name}</h2>
       ${stars}
       <div class="comments-container__header-time">
         <span class="comments-container__header-time-icon"></span>
         <span class="comments-container__header-time-number">${comment.time}</span>
       </div>`
  );

  return commentsContainerHeader;
}

function makeCommentContainerReadStatus(comment) {
  const readStatusFragment = document.createDocumentFragment();

  const commentsContainerInput = document.createElement('input');
  commentsContainerInput.className = 'comments-container__input';
  commentsContainerInput.id = `read${comment.readStatus}`;
  readStatusFragment.append(commentsContainerInput);

  const commentsContainerReadMore = document.createElement('label');
  commentsContainerReadMore.className = 'comments-container__read-more';
  commentsContainerReadMore.for = `read${comment.readStatus}`;
  commentsContainerReadMore.textContent = `Read ${comment.readStatus}`;
  readStatusFragment.append(commentsContainerReadMore);

  return readStatusFragment;
}
