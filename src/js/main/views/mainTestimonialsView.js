/* eslint-disable */
export function renderTestimonials(contentEl, data) {
  const testimonialsFragment = document.createDocumentFragment();
  const sectionEl = document.createElement('section');
  sectionEl.className = 'testimonials';
  sectionEl.id = 'blog';
  testimonialsFragment.append(sectionEl);

  const testimonialsContainer = document.createElement('div');
  testimonialsContainer.className = 'container';
  sectionEl.append(testimonialsContainer);

  testimonialsContainer.insertAdjacentHTML('afterbegin', `
    <div class="row">
        <div class="testimonials__header-container">
          <h1 class="testimonials__header">Testimonials</h1>
        </div>
      </div>
  `);

  const testimonialsRow = document.createElement('div');
  testimonialsRow.className = 'row';
  testimonialsContainer.append(testimonialsRow);

  testimonialsRow.append(makePaginationContainerLeftEl(), makeTestimonialsPhotoContainerEl(data));
  testimonialsRow.insertAdjacentHTML('beforeend', `
    <div class="testimonials__pagination-container">
          <div class="testimonials__pagination-item testimonials__pagination-item--right">
            <span class="testimonials__button testimonials__button--right"></span>
          </div>
    </div>
  `);

  contentEl.append(testimonialsFragment);
}
/* eslint-enable */
function makePaginationContainerLeftEl() {
  const testimonialsPaginationContainerLeft = document.createElement('div');
  testimonialsPaginationContainerLeft.className = 'testimonials__pagination-container';

  const testimonialsPaginationItemLeft = document.createElement('div');
  testimonialsPaginationItemLeft.className = 'testimonials__pagination-item testimonials__pagination-item--left';
  testimonialsPaginationContainerLeft.append(testimonialsPaginationItemLeft);

  const testimonialsButtonLeft = document.createElement('span');
  testimonialsButtonLeft.className = 'testimonials__button testimonials__button--left';
  testimonialsPaginationItemLeft.append(testimonialsButtonLeft);

  return testimonialsPaginationContainerLeft;
}

function makeTestimonialsPhotoContainerEl(data) {
  const testimonialSliderContainer = document.createElement('section');
  testimonialSliderContainer.className = 'testimonials__slider-container';

  const testimonialsPhotoContainer = document.createElement('div');
  testimonialsPhotoContainer.className = 'testimonials__photo-container';
  testimonialSliderContainer.append(testimonialsPhotoContainer);

  testimonialsPhotoContainer.append(makeTestimonialsWordsContainerEl(data));

  const testimonialPhoto = document.createElement('div');
  testimonialPhoto.className = 'testimonials__photo';

  testimonialPhoto.style.backgroundImage = `url("img/testimonials/${data.testimonials[0].img}.png")`;
  testimonialsPhotoContainer.append(testimonialPhoto);

  return testimonialSliderContainer;
}

function makeTestimonialsWordsContainerEl(data) {
  const testimonialsWordsContainer = document.createElement('div');
  testimonialsWordsContainer.className = 'testimonials__words-container';

  const testimonialsQuote = document.createElement('p');
  testimonialsQuote.className = 'testimonials__quote';
  testimonialsQuote.textContent = data.testimonials[0].quote;

  const testimonialsSignName = document.createElement('p');
  testimonialsSignName.className = 'testimonials__sign';
  testimonialsSignName.textContent = data.testimonials[0].name;

  const testimonialsSignPosition = document.createElement('p');
  testimonialsSignPosition.className = 'testimonials__sign';
  testimonialsSignPosition.textContent = data.testimonials[0].position;

  testimonialsWordsContainer.append(
    testimonialsQuote,
    testimonialsSignName,
    testimonialsSignPosition
  );

  return testimonialsWordsContainer;
}
