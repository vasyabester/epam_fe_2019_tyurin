/* eslint-disable */
function renderAddPostModalWindow() {
  const modalBodyEl = document.querySelector('.modal-container-body');

  const modalContainer = document.createElement('section');
  modalContainer.className = '.modal-container-form';
  modalBodyEl.append(modalContainer);

  const modalContainerContent = `<div class="container">
  <form class="modal-form" id="loginForm">
     <div class="form-group modal-form-input-container">
      <label for="typeOfPost">Type of post:</label>
      <input type="text" class="form-control" id="typeOfPost">
    </div>
    <div class="form-group modal-form-input-container">
      <label for="img">Image:</label>
      <input type="text" class="form-control" id="img">
    </div>
    <div class="form-group modal-form-input-container">
      <label for="title">Title:</label>
      <input type="text" class="form-control" id="title">
    </div>
    <div class="form-group modal-form-input-container">
      <label for="author">Author:</label>
      <input type="text" class="form-control" id="author">
    </div>
     <div class="form-group modal-form-input-container">
      <label for="date">Date:</label>
      <input type="date" class="form-control" id="date">
    </div>
    <div class="form-group modal-form-input-container">
      <label for="postDescr">Post description:</label>
      <textarea class="form-control" rows="5" id="postDescr"></textarea>
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
  formTitleEl.setCustomValidity('Title must be from 3 to 20 charactersc and starts from capital letter');

  formTitleEl.addEventListener('input', (event) => {
    if (validateTitle(event.target.value) !== 'Valid') {
      formTitleEl.setCustomValidity('Title must be from 3 to 20 charactersc and starts from capital letter');
    } else if (validateTitle(event.target.value) === 'Valid') {
      formTitleEl.setCustomValidity('');
    }
  });
}
/* eslint-enable */
