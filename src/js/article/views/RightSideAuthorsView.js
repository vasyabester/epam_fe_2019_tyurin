import {AuthorContainerAbstractView} from './AuthorContainerAbstractView';

export class RightSideAuthorsView extends AuthorContainerAbstractView {
  constructor(...props) {
    super(...props);

    this.mediator.subscribe('leftAuthorClicked', this._onLeftAuthorClicked.bind(this));
  }

  render() {
    const buttonContainerEl = document.createElement('section');
    buttonContainerEl.className = 'articles__button-container';

    this.postAuthors.forEach((postAuthor) => {
      const postsBySelectedAuthor = this.allPosts.filter((post) => post.author === postAuthor);
      const postListEl = document.createDocumentFragment();

      postsBySelectedAuthor.forEach((post) => {
        const articlePostButton = document.createElement('button');
        articlePostButton.className = 'articles__post-title-button';
        articlePostButton.innerHTML = post.title;

        $(articlePostButton).on('click', this._openPost.bind(this, post));

        postListEl.append(articlePostButton);
      });

      const buttonEl = document.createElement('button');
      buttonEl.className = 'articles__button articles__button--block';
      buttonEl.innerHTML = postAuthor;
      buttonContainerEl.append(buttonEl);

      this._addAccordionBehavior($(buttonEl));

      $(buttonEl).on('click', this._selectAuthor.bind(this));

      const tabContainerEl = document.createElement('div');
      tabContainerEl.className = 'articles__post-title-container';
      tabContainerEl.append(postListEl);

      buttonContainerEl.append(tabContainerEl);
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
