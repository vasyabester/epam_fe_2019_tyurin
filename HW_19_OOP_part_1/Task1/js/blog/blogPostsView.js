/* eslint-disable */
function renderBlogPosts(contentEl, data) {
  const sectionEl = document.createElement('section');
  sectionEl.className = 'blog';

  const headerContainer = document.createElement('div');
  headerContainer.className = 'container';

  headerContainer.insertAdjacentHTML('beforeend',
    `<div class="row">
        <div class="blog__header-container">
          <h1 class="blog__header">Blog</h1>
        </div>
      </div>`);

  const blogSearchContainer = document.createElement('div');
  blogSearchContainer.className = 'container';

  blogSearchContainer.insertAdjacentHTML('beforeend',
    `<div class="row">
        <div class="blog__search-container">
          <input class="blog__search" type="text" value="Search by author" />
        </div>
      </div>`);

  sectionEl.append(
    headerContainer,
    blogSearchContainer,
  );

  data.blogPosts.forEach((blogPost) => {
    sectionEl.append(makeBlogPostItemtEl(blogPost));
  });

  contentEl.append(sectionEl);
}
/* eslint-enable */
function makeBlogPostItemtEl(blogPost) {
  const blogPostItem = document.createElement('section');
  blogPostItem.className = `blog__${blogPost.content.type}`;

  const blogPostContainer = document.createElement('div');
  blogPostContainer.className = 'container';
  blogPostItem.append(blogPostContainer);

  const blogPostRow = document.createElement('div');
  blogPostRow.className = 'row';
  blogPostContainer.append(blogPostRow);

  const blogPostArticle = document.createElement('div');
  blogPostArticle.className = `blog__${blogPost.content.type}-post-article`;

  blogPostRow.append(
    makeBlogFileContainerEl(blogPost),
    makeBlogPostContent(blogPost),
    blogPostArticle
  );

  return blogPostItem;
}

function makeBlogFileContainerEl(blogPost) {
  const blogFileContainer = document.createElement('div');
  blogFileContainer.className = `blog__${blogPost.content.type}-file-container`;

  let content = '';

  if (blogPost.content.type === 'video') {
    content = `<video class="blog__video-file" poster=${blogPost.content.poster} preload=${blogPost.content.preload}>
                <source src=${blogPost.content.src} type="video/webm; codecs='vp8, vorbis'">
              </video>`;
  } else if (blogPost.content.type === 'audio') {
    content = `<img class="blog__audio-file" src="${blogPost.content.iconSrc}"/>`;
  } else if (blogPost.content.type === 'picture') {
    content = `<img class="blog__picture-file" src="${blogPost.content.iconSrc}"/>`;
  }

  blogFileContainer.insertAdjacentHTML('afterbegin', content);

  return blogFileContainer;
}

function makeBlogPostContent(blogPost) {
  const blogPostContent = document.createElement('div');
  blogPostContent.className = `blog__${blogPost.content.type}-post`;

  let stars = '';

  blogPost.stars.forEach((star) => {
    stars += `<span class="blog__${blogPost.content.type}-post-message-${star}-star-icon"></span>`;
  });

  blogPostContent.insertAdjacentHTML('beforeend',
    `<span class="blog__${blogPost.content.type}-post-avatar"></span>
            <div class="blog__${blogPost.content.type}-post-data-container">
              <div class="blog__${blogPost.content.type}-post-name">${blogPost.author}</div>
              <div class="blog__${blogPost.content.type}-post-message-container">
                <span class="blog__${blogPost.content.type}-post-message">${blogPost.date}</span>
                <span class="blog__${blogPost.content.type}-post-message">&#8226;</span>
                <span class="blog__${blogPost.content.type}-post-message">${blogPost.timeRead}</span>
                <span class="blog__${blogPost.content.type}-post-message">&#8226;</span>
                <span class="blog__${blogPost.content.type}-post-message-icon"></span>
                <span class="blog__${blogPost.content.type}-post-message">${blogPost.comments}</span>
                ${stars}
              </div>
            </div>`
  );

  let audioTrack = '';

  if (blogPost.content.type === 'audio') {
    audioTrack = `<audio controls class="blog__audio-post-article-track">
                <source src="${blogPost.content.src}" type="audio/mp3" >
                Browser does not support tag audio.
              </audio>`;
  }

  blogPostContent.insertAdjacentHTML('beforeend',
    ` <h1 class="blog__${blogPost.content.type}-post-article-header">${blogPost.header}</h1>
                ${audioTrack}
                <p class="blog__${blogPost.content.type}-post-article-text">${blogPost.text}</p>
                <button class="blog__${blogPost.content.type}-post-article-button">Read more</button>`
  );

  return blogPostContent;
}
