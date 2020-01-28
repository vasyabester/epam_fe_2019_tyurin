/* eslint-disable */
export function renderAboutUs(contentEl, data) {
  const sectionEl = document.createElement('section');
  sectionEl.className = 'about-us';
  sectionEl.id = 'about';

  const headerContainerEl = document.createElement('div');
  headerContainerEl.className = 'container';

  headerContainerEl.insertAdjacentHTML('afterbegin',
    `<div class="row">
        <div class="about-us__header-container">
          <h1 class="about-us__header">About us</h1>
        </div>
      </div>
      <div class="row">
        <p class="about-us__header-text">This is who we are - or at least who we strive to be…</p>
      </div>`);

  sectionEl.append(
    headerContainerEl,
    makeNotesAndVideoContainerEl()
  );

  contentEl.append(sectionEl);
}
/* eslint-enable */
function makeNotesAndVideoContainerEl() {
  const notesAndVideoContainerEl = document.createElement('div');
  notesAndVideoContainerEl.className = 'container';

  const notesContainerRowEl = document.createElement('div');
  notesContainerRowEl.className = 'row';
  notesAndVideoContainerEl.append(notesContainerRowEl);

  notesContainerRowEl.append(makeNotesContainerEl());

  const notesVideoContainer = document.createElement('div');
  notesVideoContainer.className = 'notes-video-container';
  notesVideoContainer.insertAdjacentHTML('afterbegin',
    `<video class="notes-video-file" controls poster="img/video.png" preload="none">
            <source src="video/birds.webm" type="video/webm; codecs='vp8, vorbis'">
          </video>
          <span class="notes-video-play"></span>`);
  notesContainerRowEl.append(notesVideoContainer);

  return notesAndVideoContainerEl;
}

function makeNotesContainerEl() {
  const notesContainer = document.createElement('div');
  notesContainer.className = 'notes-container';

  const notesContainerItem = document.createElement('div');
  notesContainerItem.className = 'notes-container__item notes-container__item--green';

  const typographyImage = document.createElement('span');
  typographyImage.className = 'notes-container__item-image-typography';

  const typographyText = document.createElement('span');
  typographyText.className = 'notes-container__item-text-typorgaphy';
  typographyText.textContent = 'Typography';
  notesContainerItem.append(typographyImage, typographyText);

  notesContainer.append(
    notesContainerItem,
    makeNotesContainerSecondItemEl(),
    makeNotesContainerThirdItemEl(),
  );

  return notesContainer;
}

function makeNotesContainerSecondItemEl() {
  const notesContainerSecondItem = document.createElement('div');
  notesContainerSecondItem.className = 'notes-container__item notes-container__item--blue';

  const typographySecondImage = document.createElement('span');
  typographySecondImage.className = 'notes-container__item-image-icon-set';

  const typographySecondText = document.createElement('span');
  typographySecondText.className = 'notes-container__item-text-icon-set';
  typographySecondText.textContent = 'Icon set';
  notesContainerSecondItem.append(typographySecondImage, typographySecondText);

  return notesContainerSecondItem;
}

function makeNotesContainerThirdItemEl() {
  const notesContainerThirdItem = document.createElement('div');
  notesContainerThirdItem.className = 'notes-container__item notes-container__item--pink';

  const typographyThirdImage = document.createElement('span');
  typographyThirdImage.className = 'notes-container__item-image-accurate';

  const typographyThirdText = document.createElement('span');
  typographyThirdText.className = 'notes-container__item-text-accurate';
  typographyThirdText.textContent = 'Accurate';
  notesContainerThirdItem.append(typographyThirdImage, typographyThirdText);

  return notesContainerThirdItem;
}
