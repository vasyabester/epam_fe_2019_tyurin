const onSubmit = (event) => {
  event.preventDefault();

  const formData = {
    type: event.target.typeOfPost.value,
    img: event.target.img.value,
    title: event.target.title.value,
    author: event.target.author.value,
    date: event.target.date.value,
    text: event.target.text.value,
    quote: event.target.quote.value,
  };

  const newPost = new ImagePost(formData); // eslint-disable-line

  newPost.createNewPost();
};

const main = () => {
  const form = document.getElementById('loginForm');
  form.addEventListener('submit', onSubmit);
};

document.addEventListener('DOMContentLoaded', main);
