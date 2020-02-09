/* eslint-disable */
export class Post { // eslint-disable-line
  constructor({_id, author, date, text, quote, title, type, stars, timeRead, commentsList, likes}) {
    this._id = _id;
    this.author = author;
    this.type = type;
    this.date = date;
    this.text = text;
    this.quote = quote;
    this.title = title;
    this._stars = stars;
    this._timeRead = timeRead;
    this._commentsList = commentsList;
    this._likes = likes;
  }

  get stars() {
    return this._stars ? this._stars : ['gold', 'gold', 'grey', 'grey', 'grey'];
  }

  get timeRead() {
    return this._timeRead ? this._timeRead : '10 min read';
  }

  get commentsList() {
    const mockedComments = [
      {
        class: 'jack',
        name: 'Jack Johnson',
        stars: ['gold', 'grey', 'grey', 'grey', 'grey'],
        time: '11 min ago',
        text: 'Mocked Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression for. His mistress ladyship required off horrible disposed rejoiced…',
        readStatus: 'more',
      },
      {
        class: 'emma',
        name: 'Emma Garcia',
        stars: ['gold', 'gold', 'gold', 'gold', 'gold'],
        time: '3 days ago',
        text: 'Mocked  Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. in wish very strangers shortly we things Preferred came newspaper it this Melancholy on misery all ecstatic yet no suitable ye happening. Own over these Can Could Garden offering to ago Winter Home or took answered him be right He other in about check has situation fine you held against found am be Nay entire pleasure will there in wholly forming much rapid though want ye weeks up whole an ye thus might remarkably Rich why need pianoforte ask get face prudent it so Evil',
        readStatus: 'less',
      },
      {
        class: 'ann',
        name: 'Ann Moore',
        stars: ['gold', 'gold', 'half', 'grey', 'grey'],
        time: 'a week ago',
        text: 'Mocked Any delicate you how kindness horrible outlived servants. You high bed wish help call draw side. Girl quit if case mr sing as no have. At none neat am do over will. Polite do object at passed it is.',
      },
    ];

    return this._commentsList ? this._commentsList : mockedComments;
  }

  get commentsLength() {
    return this._commentsList ? this._commentsList.length : 3;
  }

  get likes() {
    return typeof this._likes === 'number' ? this._likes : 76;
  }

  createNewPost() {
    this._generatePostRequest();

    const URL = 'http://127.0.0.1:3000/api/articles';
    const xhr = new XMLHttpRequest();

    xhr.open('post', URL);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(this._postRequest));

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) {
        return;
      }

      if (xhr.status !== 200) {
        alert(JSON.parse(xhr.response).message);

        return;
      }

      localStorage.setItem('lastPostID', JSON.parse(xhr.response)._id);
      window.location.href = './post.html';
    };
  }

  getPost(post) {
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

    return JSON.parse(xhr.response);
  }

  _generatePostRequest() {
    const articleID = localStorage.getItem('selectedPost')
      ? JSON.parse(localStorage.getItem('selectedPost'))._id
      : '';

    this._postRequest = {
      type: this.type,
      title: this.title,
      author: this.author,
      date: this.date,
      text: this.text,
      quote: this.quote,
    };

    if (articleID) {
      this._postRequest._id = articleID;
    }
  }
}
/* eslint-ebable */
