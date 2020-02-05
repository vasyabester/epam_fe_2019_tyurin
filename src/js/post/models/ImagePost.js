import {Post} from './Post';

/* eslint-disable */
export class ImagePost extends Post {
  constructor({img, ...props}) {
    super(props);

    this.img = img;
  }

  _generatePostRequest() {
    super._generatePostRequest();

    this._postRequest.img = this.img;
  }
}
/* eslint-enable */
