/* eslint-disable */
function renderReadButton(contentEl) {
  const readButtonFragment = document.createDocumentFragment();
  const containerEl = document.createElement('div');

  containerEl.className = 'container';
  readButtonFragment.append(containerEl);

  const readButtonRow = document.createElement('div');
  readButtonRow.className = 'row';
  containerEl.append(readButtonRow);

  readButtonRow.insertAdjacentHTML('beforeend',
    `<section class="blog__read-more">
          <button class="blog__read-more-button">Read more</button>
        </section>`
  );

  contentEl.append(readButtonFragment);
}
/* eslint-enable */
