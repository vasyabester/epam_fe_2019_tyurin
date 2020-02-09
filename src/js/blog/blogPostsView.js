/* eslint-disable */
export function displayMainContent(contentEl, postList) {
  if (postList.length) {
    renderBlogPosts(contentEl, postList);
  } else {
    contentEl.insertAdjacentHTML(
      'beforeend',
      `
      <p class="blog__empty-text">There are no articles here, you can add by clicking the button above
      </p>
      `
    );
  }
}

function renderBlogPosts(contentEl, postList) {
  const sectionEl = document.createElement('section');
  sectionEl.className = 'blog';

  const headerContainer = document.createElement('div');
  headerContainer.className = 'container';

  headerContainer.insertAdjacentHTML(
    'beforeend',
    `
     <div class="row">
        <div class="blog__header-container">
          <h1 class="blog__header">Blog</h1>
        </div>
     </div>
    `
  );

  const blogSearchContainer = document.createElement('div');
  blogSearchContainer.className = 'container';

  blogSearchContainer.insertAdjacentHTML(
    'beforeend',
    `
      <div class="row">
        <div class="blog__search-container">
          <input class="blog__search" type="text" placeholder="Search by author" " />
        </div>
        <div class="blog__search-container">
          <input class="blog__search" type="text" placeholder="Search by title" " />
        </div>
      </div>
    `
  );

  sectionEl.append(
    headerContainer,
    blogSearchContainer,
  );

  postList.forEach((blogPost) => {
    sectionEl.append(makeBlogPostItemtEl(blogPost));
  });

  contentEl.append(sectionEl);
}

export function makeBlogPostItemtEl(blogPost) {
  const blogPostItem = document.createElement('section');
  blogPostItem.className = `blog__${blogPost.type} blog__item`;

  const blogPostContainer = document.createElement('div');
  blogPostContainer.className = 'container';
  blogPostItem.append(blogPostContainer);

  const blogPostRow = document.createElement('div');
  blogPostRow.className = 'row';
  blogPostContainer.append(blogPostRow);

  const blogPostArticle = document.createElement('div');
  blogPostArticle.className = `blog__${blogPost.type}-post-article`;

  blogPostRow.append(
    makeBlogFileContainerEl(blogPost),
    makeBlogPostContent(blogPost),
    blogPostArticle
  );

  return blogPostItem;
}

function makeBlogFileContainerEl(blogPost) {
  const blogFileContainer = document.createElement('div');
  blogFileContainer.className = `blog__${blogPost.type}-file-container`;

  let content = '';

  if (blogPost.type === 'video') {
    content = `<video class="blog__video-file" poster=${blogPost.poster} preload=${blogPost.preload}>
                <source src=${blogPost.src} type="video/webm; codecs='vp8, vorbis'">
              </video>`;
  } else if (blogPost.type === 'audio') {
    content = `<img class="blog__audio-file" src="${blogPost.iconSrc}"/>`;
  } else if (blogPost.type === 'picture') {
    content = `<img class="blog__picture-file" src="${blogPost.img}"/>`;
  }

  blogFileContainer.insertAdjacentHTML('afterbegin', content);

  return blogFileContainer;
}

function makeBlogPostContent(blogPost) {
  const blogPostContent = document.createElement('div');
  blogPostContent.className = `blog__${blogPost.type}-post`;

  let stars = '';
  const blogStart = blogPost.stars || ['gold', 'gold', 'gold', 'gold', 'gold',];

  blogStart.forEach((star) => {
    stars += `<span class="blog__${blogPost.type}-post-message-${star}-star-icon"></span>`;
  });

  blogPostContent.insertAdjacentHTML(
    'beforeend',
    `
    <span class="blog__${blogPost.type}-post-avatar"></span>
            <div class="blog__${blogPost.type}-post-data-container">
              <div class="blog__${blogPost.type}-post-name blog__post-name">${blogPost.author}</div>
              <div class="blog__${blogPost.type}-post-message-container">
                <span class="blog__${blogPost.type}-post-message">${blogPost.date}</span>
                <span class="blog__${blogPost.type}-post-message">&#8226;</span>
                <span class="blog__${blogPost.type}-post-message">${blogPost.timeRead}</span>
                <span class="blog__${blogPost.type}-post-message">&#8226;</span>
                <span class="blog__${blogPost.type}-post-message-icon"></span>
                <span class="blog__${blogPost.type}-post-message">${blogPost.commentsLength}</span>
                ${stars}
              </div>
            </div>
    `
  );

  let audioTrack = '';

  if (blogPost.type === 'audio') {
    audioTrack = `
    <audio controls class="blog__audio-post-article-track">
       <source src="${blogPost.src}" type="audio/mp3" >
                Browser does not support tag audio.
    </audio>
    `
    ;
  }

  blogPostContent.insertAdjacentHTML(
    'beforeend',
    ` 
    <h1 class="blog__${blogPost.type}-post-article-header blog__post-article-header">${blogPost.title}</h1>
                ${audioTrack}
                <p class="blog__${blogPost.type}-post-article-text">${blogPost.text}</p>
                <button class="blog__${blogPost.type}-post-article-button">Read more</button>
                <button class="blog__post-delete-button" value="delete">Delete post</button>
                <button class="blog__post-edit-button" data-toggle="modal" data-target="#myModal" value="edit">Edit post</button>
    `
  );

  blogPostContent.addEventListener('click', function () {
    localStorage.setItem('selectedPost', JSON.stringify(blogPost));
  });

  return blogPostContent;
}
/* eslint-enable */
