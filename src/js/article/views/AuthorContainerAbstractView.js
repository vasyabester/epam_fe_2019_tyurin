import {makeBlogPostItemtEl} from '../../blog/blogPostsView';

export class AuthorContainerAbstractView {
  constructor(postAuthors, allPosts, mediator) {
    this.postAuthors = postAuthors;
    this.allPosts = allPosts;
    this.mediator = mediator;
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
    $('.blog-container').text('')
      .append(makeBlogPostItemtEl(post));
  }
}
