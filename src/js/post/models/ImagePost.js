import {Post} from './Post';

/* eslint-disable */
export class ImagePost extends Post {
  constructor({_id, author, date, text, quote, title, type, stars, timeRead, commentsList, likes, img}) {
    super({_id, author, date, text, quote, title, type, stars, timeRead, commentsList, likes});

    this.img = img;
  }

  _generatePostRequest() {
    super._generatePostRequest();

    this._postRequest.img = this.img;
  }
}
/* eslint-enable */
