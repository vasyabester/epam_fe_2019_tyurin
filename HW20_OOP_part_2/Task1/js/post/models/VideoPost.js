/* eslint-disable */
class VideoPost extends Post {
  constructor({id, author, date, text, quote, title, type, stars, timeRead, commentsList, likes, poster, src, preload}) {
    super({id, author, date, text, quote, title, type, stars, timeRead, commentsList, likes});

    this.poster = poster;
    this.preload = preload;
    this.src = src;
  }

  generatePostRequest() {
    super.generatePostRequest();

    this._postRequest.preload = this.preload;
    this._postRequest.poster = this.poster;
    this._postRequest.src = this.src;
  }
}
/* eslint-enable */
