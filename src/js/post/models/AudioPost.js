import {Post} from './Post';

/* eslint-disable */
export class AudioPost extends Post {
  constructor({iconSrc, src, ...props}) {
    super(props);

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
