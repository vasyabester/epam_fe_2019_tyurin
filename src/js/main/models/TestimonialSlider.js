import {Slider} from './Slider';

export function TestimonialSlider(testimonials, animationDuration) { // eslint-disable-line
  const testimonialContainer = document.querySelector('.testimonials');
  const testimonialButtons = {
    rightButton: document.querySelector('.testimonials__pagination-item--right'),
    leftButton: document.querySelector('.testimonials__pagination-item--left'),
  };

  Slider.call(this, testimonialContainer, testimonialButtons); // eslint-disable-line

  this.activeItemID = 1;
  this.testimonials = testimonials;

  this.onRightButtonClick = function () {
    const nextElement = this.appendNextElement('right');
    const testimonialsElements = Object.assign([], document.querySelectorAll('.testimonials__photo-container'));

    testimonialsElements.forEach((element) => {
      element.animate([
        {left: '0'},
        {left: '-560px'},
      ], {
        duration: animationDuration,
      });
    });

    if (this.activeItemID < this.testimonials.length) {
      ++this.activeItemID;
    } else {
      this.activeItemID = 1;
    }

    setTimeout(() => {
      const testimonialsItem = this.testimonials[this.activeItemID - 1];
      testimonialsElements[0].querySelector('.testimonials__photo').style.backgroundImage = `url("img/testimonials/${testimonialsItem.img}.png")`;
      testimonialsElements[0].querySelector('.testimonials__quote').textContent = testimonialsItem.quote;
      testimonialsElements[0].querySelectorAll('.testimonials__sign')[0].textContent = testimonialsItem.name;
      testimonialsElements[0].querySelectorAll('.testimonials__sign')[1].textContent = testimonialsItem.position;

      nextElement.remove();
    }, animationDuration);

    return this;
  };

  this.onLeftButtonClick = function () {
    const nextElement = this.appendNextElement('left');
    const testimonialsElements = Object.assign([], document.querySelectorAll('.testimonials__photo-container'));

    testimonialsElements.forEach((element) => {
      element.animate([
        {left: '0'},
        {left: '560px'},
      ], {
        duration: animationDuration,
      });
    });

    if (this.activeItemID > 1) {
      --this.activeItemID;
    } else {
      this.activeItemID = this.testimonials.length;
    }

    setTimeout(() => {
      nextElement.remove();

      const testimonialsElements = Object.assign([], document.querySelectorAll('.testimonials__photo-container'));
      const testimonialsItem = this.testimonials[this.activeItemID - 1];

      testimonialsElements[0].querySelector('.testimonials__photo').style.backgroundImage = `url("img/testimonials/${testimonialsItem.img}.png")`;
      testimonialsElements[0].querySelector('.testimonials__quote').textContent = testimonialsItem.quote;
      testimonialsElements[0].querySelectorAll('.testimonials__sign')[0].textContent = testimonialsItem.name;
      testimonialsElements[0].querySelectorAll('.testimonials__sign')[1].textContent = testimonialsItem.position;
    }, animationDuration);

    return this;
  };

  this.appendNextElement = function (side) {
    const nextTestimonialsID = this.getNextTestimonialsID(side);
    const nextTestimonialItem = this.testimonials.find((item) => item.id === nextTestimonialsID);
    const nextElement = document.querySelectorAll('.testimonials__photo-container')[0].cloneNode(true);
    const sliderContainerEl = document.querySelector('.testimonials__slider-container');

    nextElement.querySelector('.testimonials__photo').style.backgroundImage = `url("img/testimonials/${nextTestimonialItem.img}.png")`;
    nextElement.querySelector('.testimonials__quote').textContent = nextTestimonialItem.quote;
    nextElement.querySelectorAll('.testimonials__sign')[0].textContent = nextTestimonialItem.name;
    nextElement.querySelectorAll('.testimonials__sign')[1].textContent = nextTestimonialItem.position;

    side === 'right' && sliderContainerEl.append(nextElement);

    if (side === 'left') {
      nextElement.style.position = 'relative';
      nextElement.style.marginLeft = '-560px';

      sliderContainerEl.prepend(nextElement);
    }

    return nextElement;
  };

  this.getNextTestimonialsID = function (side) {
    let nextPortfolioID;

    if (side === 'left') {
      nextPortfolioID = this.activeItemID - 1 < 1 ? this.testimonials.length : this.activeItemID - 1;
    } else if (side === 'right') {
      nextPortfolioID = this.activeItemID + 1 > this.testimonials.length ? 1 : this.activeItemID + 1;
    }

    return nextPortfolioID;
  };
}
