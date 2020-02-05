export class RightSideAuthorsView {
  constructor(postAuthors, allPosts, mediator) {
    this.postAuthors = postAuthors;
    this.allPosts = allPosts;
    this.mediator = mediator;

    this.mediator.subscribe('leftAuthorClicked', this._onLeftAuthorClicked.bind(this));
  }

  render() {
    const buttonContainerEl = document.createElement('section');
    buttonContainerEl.className = 'articles__button-container';

    this.postAuthors.forEach((postAuthor) => {
      const postsBySelectedAuthor = this.allPosts.filter((post) => post.author === postAuthor);
      let postListEl = '';

      postsBySelectedAuthor.forEach((Post) => {
        postListEl += `<div class="articles__post-title">${Post.title}</div>`;
      });
      const buttonEl = document.createElement('button');
      buttonEl.className = 'articles__button articles__button--block';
      buttonEl.innerHTML = postAuthor;
      buttonContainerEl.append(buttonEl);

      this._addAccordionBehavior($(buttonEl));

      $(buttonEl).on('click', this._selectAuthor.bind(this));

      buttonContainerEl.insertAdjacentHTML(
        'beforeend',
        `
          <div class="articles__post-title-container">
            ${postListEl}
          </div>
        `,
      );
    });

    return buttonContainerEl;
  }

  _addAccordionBehavior($buttonEl) {
    $buttonEl.on('click', function () {
      $('.articles__button-container .articles__post-title-container').not($(this).next()).slideUp(100);
      $(this).next().slideToggle(200);
    });
  }

  _selectAuthor(event, needToTrigger = true) {
    if (needToTrigger) {
      this.mediator.publish('rightAuthorClicked', event.target.innerText);
      this._onLeftAuthorClicked(event.target.innerText);
    }
  }

  _onLeftAuthorClicked(authorName) {
    const rightAuthorButton = Object.assign([], $('.articles__right-side').find('.articles__button'))
      .filter((button) => button.innerText === authorName[0]);

    $(rightAuthorButton).trigger('click', false);
  }
}
