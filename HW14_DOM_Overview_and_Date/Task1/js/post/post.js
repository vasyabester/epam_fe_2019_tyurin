/* eslint-disable */
function render() {
  const contentEl = document.getElementById('content');
  const data = getMockedJson();
  renderPostLeft(contentEl, data);
  renderPostRight(contentEl, data);
}
/* eslint-enable */
render();
