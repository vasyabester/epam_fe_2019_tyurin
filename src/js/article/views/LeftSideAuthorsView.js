import {makeBlogPostItemtEl} from '../../blog/blogPostsView';

export class LeftSideAuthorsView {
  constructor(postAuthors, allPosts, mediator) {
    this.postAuthors = postAuthors;
    this.allPosts = allPosts;
    this.mediator = mediator;

    this.mediator.subscribe('rightAuthorClicked', this._onRightAuthorClicked.bind(this));
  }

  render() {
    const leftSideContainerFragment = document.createDocumentFragment();

    this.mainContainer = document.createElement('div');
    this.mainContainer.className = 'blogContainer';

    leftSideContainerFragment.append(this._renderButtonContainerEl(), this.mainContainer);

    return leftSideContainerFragment;
  }

  _renderButtonContainerEl() {
    const buttonContainerEl = document.createElement('section');
    buttonContainerEl.className = 'articles__button-container--left';

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
      buttonEl.className = 'articles__button';
      buttonEl.innerHTML = postAuthor;
      buttonContainerEl.append(buttonEl);

      this._addAccordionBehavior($(buttonEl));

      $(buttonEl).on('click', this._selectAuthor.bind(this));

      const tabContainerEl = document.createElement('div');
      tabContainerEl.className = 'articles__tab-post-title-container';
      tabContainerEl.hidden = true;
      tabContainerEl.append(postListEl);

      buttonContainerEl.append(tabContainerEl);
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

  _openPost(post) {
    const URL = `http://127.0.0.1:3000/api/articles/${post._id}`;
    const xhr = new XMLHttpRequest();

    xhr.open('get', URL, false);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(null);
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.status !== 200) {
        alert(JSON.parse(xhr.response).message);

        return;
      }
    };

    this._renderPost(JSON.parse(xhr.response));
  }

  _renderPost(post) {
    this.mainContainer.innerHTML = '';
    this.mainContainer.append(makeBlogPostItemtEl(post));
  }
}
