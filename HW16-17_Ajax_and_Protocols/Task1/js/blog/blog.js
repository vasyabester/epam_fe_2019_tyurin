/* eslint-disable */
function render() {
  const contentEl = document.getElementById('content');
  const data = getMockedJson();

  renderBlogPosts(contentEl, data);
  renderReadButton(contentEl);
  renderAddPostModalWindow();
}
/* eslint-enable */
render();
