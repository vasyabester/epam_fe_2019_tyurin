/* eslint-disable */
function renderLatestPosts(contentEl, data) {
  const latestPostFragment = document.createDocumentFragment();
  const sectionEl = document.createElement('section');
  sectionEl.className = 'latest-posts';
  sectionEl.id = 'pages';
  latestPostFragment.append(sectionEl);

  const headerContainerEl = document.createElement('div');
  headerContainerEl.className = 'container';
  sectionEl.append(headerContainerEl);

  headerContainerEl.insertAdjacentHTML('afterbegin', `
    <div class="row">
        <div class="latest-posts__header-container">
          <h1 class="latest-posts__header">Latest posts</h1>
        </div>
      </div>
      <div class="row">
        <div class="latest-posts__container">
          <p class="latest-posts__header-text">Information is a source of learning. But unless it is organized,
            processed and available to the right people</p>
        </div>
      </div>
  `);

  sectionEl.append(makePostContainerEl(data));

  contentEl.append(latestPostFragment);
}
/* eslint-enable */
function makePostContainerEl(data) {
  const postContainerEl = document.createElement('div');
  postContainerEl.className = 'container';

  const rowPostcontainer = document.createElement('div');
  rowPostcontainer.className = 'row';
  postContainerEl.append(rowPostcontainer);

  const latestPostArticalsContainer = document.createElement('section');
  latestPostArticalsContainer.className = 'latest-posts-articals-container';
  rowPostcontainer.append(latestPostArticalsContainer);

  data.articles.forEach((article) => {
    const latestPostsItem = document.createElement('article');
    latestPostsItem.className = 'latest-posts__item';
    latestPostArticalsContainer.append(latestPostsItem);

    const latestPostsItemImage = document.createElement('img');
    latestPostsItemImage.className = 'latest-posts__item-image';
    latestPostsItemImage.src = article.img;
    latestPostsItemImage.alt = 'Here must be a post photo';

    const latestPostsItemHeader = document.createElement('h1');
    latestPostsItemHeader.className = 'latest-posts__item-header';
    latestPostsItemHeader.textContent = article.header;

    const latestPostItemText = document.createElement('p');
    latestPostItemText.className = 'latest-posts__item-text';
    latestPostItemText.textContent = article.text;

    latestPostsItem.append(
      latestPostsItemImage,
      latestPostsItemHeader,
      latestPostItemText
    );

    latestPostsItem.insertAdjacentHTML('beforeEnd',
      `<span class="latest-posts__message-info">${article.date}</span>
    <span class="latest-posts__message-info">&#8226;</span>
    <span class="latest-posts__message-info">${article.timeRead}</span>
    <span class="latest-posts__message-info">&#8226;</span>
    <span class="latest-posts__message-info latest-posts__message-icon"></span>
    <span class="latest-posts__message-info">${article.comments}</span>`
    );
  });

  return postContainerEl;
}
