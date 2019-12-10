/* eslint-disable */
function render() {
  const contentEl = document.getElementById('content');
  const data = getMockedJson();

  renderAboutUs(contentEl, data);
  renderLatestPosts(contentEl, data);
  renderLatestPortfolio(contentEl, data);
  renderTestimonials(contentEl, data);
  renderContactUs(contentEl, data);
}
/* eslint-enable */
render();
