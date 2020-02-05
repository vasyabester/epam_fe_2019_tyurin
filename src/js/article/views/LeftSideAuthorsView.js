export class LeftSideAuthorsView {
  constructor(postAuthors, allPosts, mediator) {
    this.postAuthors = postAuthors;
    this.allPosts = allPosts;
    this.mediator = mediator;

    this.mediator.subscribe('rightAuthorClicked', this._onRightAuthorClicked.bind(this));
  }

  render() {
    const buttonContainerEl = document.createElement('section');
    buttonContainerEl.className = 'articles__button-container--left';

    this.postAuthors.forEach((postAuthor) => {
      const postsBySelectedAuthor = this.allPosts.filter((post) => post.author === postAuthor);
      let postListEl = '';

      postsBySelectedAuthor.forEach((Post) => {
        postListEl += `<div class="articles__post-title">${Post.title}</div>`;
      });

      const buttonEl = document.createElement('button');
      buttonEl.className = 'articles__button';
      buttonEl.innerHTML = postAuthor;
      buttonContainerEl.append(buttonEl);

      this._addAccordionBehavior($(buttonEl));

      $(buttonEl).on('click', this._selectAuthor.bind(this));

      buttonContainerEl.insertAdjacentHTML(
        'beforeend',
        `
          <div class="articles__tab-post-title-container" hidden="true">
            ${postListEl}
          </div>
        `,
      );
    });

    return buttonContainerEl;
  }

  /* eslint-disable */
  _addAccordionBehavior($buttonEl) {
    $buttonEl.on('click', function () {
      $(this).addClass('selected')
        .next().attr('hidden', false);

      $(`.${$(this)[0].classList[0]}`).not(this).each(function () {
        $(this).toggleClass('selected', false);
        $(this).next().attr('hidden', true);
      });
    });
  }

  /* eslint-enable */

  _selectAuthor(event, needToTrigger = true) {
    if (needToTrigger) {
      this.mediator.publish('leftAuthorClicked', event.target.innerText);
      this._onRightAuthorClicked(event.target.innerText);
    }
  }

  _onRightAuthorClicked(authorName) {
    const leftAuthorButton = Object.assign([], $('.articles__left-side').find('.articles__button'))
      .filter((button) => button.innerText === authorName[0]);

    $(leftAuthorButton).trigger('click', false);
  }
}
