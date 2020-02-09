import {makeBlogPostItemtEl} from '../../blog/blogPostsView';
import {Post} from '../../post/models/Post';

export class AuthorContainerAbstractView {
  constructor(postAuthors, allPosts, mediator) {
    this.postAuthors = postAuthors;
    this.allPosts = allPosts;
    this.mediator = mediator;
  }

  _openPost(post) {
    const postModel = new Post(post);

    this._renderPost(postModel.getPost(post));

    return this;
  }

  _renderPost(post) {
    $('.blog-container').text('')
      .append(makeBlogPostItemtEl(post));

    return this;
  }
}
