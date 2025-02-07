import {Post} from './Post';

/* eslint-disable */
export class VideoPost extends Post {
  constructor({poster, src, preload, ...props}) {
    super(props);

    this.poster = poster;
    this.preload = preload;
    this.src = src;
  }

  _generatePostRequest() {
    super._generatePostRequest();

    this._postRequest.preload = this.preload;
    this._postRequest.poster = this.poster;
    this._postRequest.src = this.src;
  }
}
/* eslint-enable */
