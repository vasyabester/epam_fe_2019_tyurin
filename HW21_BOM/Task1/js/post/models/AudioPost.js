/* eslint-disable */
class AudioPost extends Post {
  constructor({id, author, date, text, quote, title, type, stars, timeRead, commentsList, likes, iconSrc, src}) {
    super({id, author, date, text, quote, title, type, stars, timeRead, commentsList, likes});

    this.src = src;
    this.iconSrc = iconSrc;
  }

  _generatePostRequest() {
    super._generatePostRequest();

    this._postRequest.iconSrc = this.iconSrc;
    this._postRequest.src = this.src;
  }
}
/* eslint-enable */
