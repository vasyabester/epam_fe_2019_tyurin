import { validate } from "./utils";

/* eslint-disable */
export function renderAddPostModalWindow() {
  const modalBodyEl = document.querySelector('.modal-container-body');

  const modalContainer = document.createElement('section');
  modalContainer.className = '.modal-container-form';
  modalBodyEl.append(modalContainer);

  const modalContainerContent = `<div class="container">
  <form class="modal-form" id="loginForm">
     <div class="form-group modal-form-input-container">
      <label for="typeOfPost">Type of post:</label>
      <input type="text" class="form-control" id="typeOfPost" value="picture" readonly>
    </div>
    <div class="form-group modal-form-input-container">
      <label for="img">Image:</label>
      <input type="text" class="form-control" id="img" pattern="(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?" title="Please put correct link for image">
    </div>
    <div class="form-group modal-form-input-container">
      <label for="title">Title:</label>
      <input type="text" class="form-control" id="title">
    </div>
    <div class="form-group modal-form-input-container">
      <label for="author">Author:</label>
      <input type="text" class="form-control" id="author" pattern="(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)" title="Name should contain 2 words with first capital letter">
    </div>
     <div class="form-group modal-form-input-container">
      <label for="date">Date:</label>
      <input type="date" class="form-control" id="date">
    </div>
    <div class="form-group modal-form-input-container">
      <label for="text">Post description:</label>
      <textarea class="form-control" rows="5" id="text"></textarea>
    </div>
    <div class="form-group modal-form-input-container">
      <label for="quote">Quote:</label>
      <textarea class="form-control" rows="5" id="quote"></textarea>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
</div>`;

  modalContainer.insertAdjacentHTML('beforeend', modalContainerContent);

  const formTitleEl = document.querySelector('#title');
  const errorMessage = 'Title must be from 6 to 60 characters, starts from capital letter, contains a lowercase letter, consist only Latin chracters and numbers and such symbols: !,:,-,?,.,, and space';
  formTitleEl.setCustomValidity(errorMessage);

  formTitleEl.addEventListener('input', (event) => {
    if (validate(event.target.value) !== true) {
      formTitleEl.setCustomValidity(errorMessage);
    } else if (validate(event.target.value) === true) {
      formTitleEl.setCustomValidity('');
    }
  });
}
/* eslint-enable */
