/* eslint-disable */
export function renderPostRight(contentEl, data) {
  const postRightFragment = document.createDocumentFragment();

  const sectionEl = document.createElement('section');
  sectionEl.className = 'post__right';
  postRightFragment.append(sectionEl);

  const postLatestPosts = document.createElement('div');
  postLatestPosts.className = 'post__latests-posts';
  postLatestPosts.append(makeLatestsPostsContainer(data.latestPosts));

  sectionEl.append(postLatestPosts);
  sectionEl.append(makeAccordion(data.categories));
  sectionEl.append(makeTags(data.tags));

  contentEl.append(postRightFragment);
}
/* eslint-enable */
function makeAccordion(categories) {
  const accordion = document.createElement('div');
  accordion.className = 'accordion';

  const accordionHeader = document.createElement('h2');
  accordionHeader.className = 'accordion__header';
  accordionHeader.textContent = 'Categories';
  accordion.append(accordionHeader);

  categories.forEach((category) => {
    let newsItems = '';

    category.news.forEach((item) => {
      newsItems += `<li class="accordion__news-item">${item}</li>`;
    });

    accordion.insertAdjacentHTML('beforeend',
      `<div class="accordion__label-container">
            <input id="${category.name}" class="accordion__input" type="checkbox">
            <label for="${category.name}" class="accordion__label">${category.header} (${category.news.length})</label>
            <ul class="accordion__news">
              ${newsItems}
            </ul>
          </div>`);
  });

  return accordion;
}

function makeTags(tags) {
  const tagsEl = document.createElement('div');
  tagsEl.className = 'tags';

  let nameTags = '';

  tags.forEach((tag) => {
    nameTags += `<span class="tags-container__item">${tag}</span>`;
  });

  tagsEl.insertAdjacentHTML('beforeend',
    `<h2 class="tags__header">Tags</h2>
          <div class="tags-container">
            ${nameTags}
          </div>`
  );

  return tagsEl;
}

function makeLatestsPostsContainer(latestPosts) {
  const postLatestsPostsContainer = document.createElement('div');
  postLatestsPostsContainer.className = 'post__latests-posts-container';

  const postLatestsPostsHeader = document.createElement('h1');
  postLatestsPostsHeader.className = 'post__latests-posts-header';
  postLatestsPostsHeader.textContent = 'Latest posts';
  postLatestsPostsContainer.append(postLatestsPostsHeader);

  const postLatestsPostsLine = document.createElement('hr');
  postLatestsPostsLine.className = 'post__latests-posts-line';
  postLatestsPostsContainer.append(postLatestsPostsLine);

  latestPosts.forEach((post) => {
    postLatestsPostsContainer.insertAdjacentHTML('beforeend',
      `<img class="post__latests-posts-img" src=${post.img}/>
            <div class="post__latests-posts-message">
              <h1 class="post__latests-posts-message-header">${post.header}</h1>
              <div class="post__latests-posts-message-container">
                <span class="post__latests-posts-message-container-text">${post.date}</span>
                <span
                  class="post__latests-posts-message-container-text post__latests-posts-message-container-text--dot-small">&#8226;</span>
                <span class="post__latests-posts-message-container-text">${post.timeRead}</span>
                <span
                  class="post__latests-posts-message-container-text post__latests-posts-message-container-text--dot-small">&#8226;</span>
                <span class="post__latests-posts-message-container-text-icon"></span>
                <span class="post__latests-posts-message-container-text">${post.comments}</span>
              </div>
            </div>`
    );
  });

  const postLatestsPostsReadme = document.createElement('button');
  postLatestsPostsReadme.className = 'post__latests-posts-readme';
  postLatestsPostsReadme.textContent = 'More posts';
  postLatestsPostsContainer.append(postLatestsPostsReadme);

  return postLatestsPostsContainer;
}
