initialize();
/* eslint-disable */
function initialize() {
  const data = getMockedJson();
  const postList = getPostList();
  console.log(postList);

  render(data, postList)
}

function render(data, postList) {
  const contentEl = document.getElementById('content');

  renderBlogPosts(contentEl, data, postList);
  renderReadButton(contentEl);
  renderAddPostModalWindow();
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
