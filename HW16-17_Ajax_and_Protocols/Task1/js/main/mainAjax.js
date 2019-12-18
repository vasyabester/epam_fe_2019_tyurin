function sendPostRequest(request) {
  const URL = 'http://127.0.0.1:3000/api/create-article';
  const xhr = new XMLHttpRequest();

  xhr.open('post', URL);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(request));

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
      return;
    }

    if (xhr.status !== 200) {
      alert(JSON.parse(xhr.response).message);

      return;
    }

    window.location.href = './post.html';
  };
}

const onSubmit = (event) => {
  event.preventDefault();

  const request = {
    id: generateID(),
    typeOfPost: event.target.typeOfPost.value,
    img: event.target.img.value,
    title: event.target.title.value,
    author: event.target.author.value,
    date: event.target.date.value,
    postDescr: event.target.postDescr.value,
    quote: event.target.quote.value,
  };

  sendPostRequest(request);
};

function generateID() {
  const URL = 'http://127.0.0.1:3000/api/list';
  const xhr = new XMLHttpRequest();
  let postsList;

  xhr.open('GET', URL, false);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();

  if (xhr.status === 200) {
    postsList = JSON.parse(xhr.response);
  } else {
    alert(JSON.parse(xhr.response).message);
  }

  const newID = postsList[postsList.length - 1].id + 1;

  return newID;
}

const main = () => {
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', onSubmit);
};

document.addEventListener('DOMContentLoaded', main);
