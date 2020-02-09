import {AuthorContainerAbstractView} from './AuthorContainerAbstractView';

export class LeftSideAuthorsView extends AuthorContainerAbstractView {
  constructor(...props) {
    super(...props);

    this.mediator.subscribe('rightAuthorClicked', this._onRightAuthorClicked.bind(this));
  }

  render() {
    const mainContainerFragment = document.createDocumentFragment();

    this.mainContainer = document.createElement('div');
    this.mainContainer.className = 'blog-container';

    mainContainerFragment.append(this._renderButtonContainerEl(), this.mainContainer);

    return mainContainerFragment;
  }

  _renderButtonContainerEl() {
    const buttonContainerEl = document.createElement('section');
    buttonContainerEl.className = 'articles__button-container--left';

    this.postAuthors.forEach((postAuthor) => {
      const buttonEl = this._createButtonContainerOneAuthor(postAuthor);
      const tabContainerEl = this._createTabContainerEl(postAuthor);

      buttonContainerEl.append(buttonEl, tabContainerEl);
    });

    return buttonContainerEl;
  }

  _createButtonContainerOneAuthor(postAuthor) {
    const buttonEl = document.createElement('button');
    buttonEl.className = 'articles__button';
    buttonEl.innerHTML = postAuthor;

    this._addAccordionBehavior($(buttonEl));

    $(buttonEl).on('click', this._selectAuthor.bind(this));

    return buttonEl;
  }

  _createTabContainerEl(postAuthor) {
    const postsBySelectedAuthor = this.allPosts.filter((post) => post.author === postAuthor);
    const postListEl = document.createDocumentFragment();

    postsBySelectedAuthor.forEach((post) => {
      const articlePostButton = document.createElement('button');
      articlePostButton.className = 'articles__post-title-button';
      articlePostButton.innerHTML = post.title;

      $(articlePostButton).on('click', this._openPost.bind(this, post));

      postListEl.append(articlePostButton);
    });

    const tabContainerEl = document.createElement('div');
    tabContainerEl.className = 'articles__tab-post-title-container';
    tabContainerEl.hidden = true;
    tabContainerEl.append(postListEl);

    return tabContainerEl;
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
