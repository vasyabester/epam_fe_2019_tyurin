export function Slider(sliderContainerEl, buttons) { // eslint-disable-line
  this.sliderContainerEl = sliderContainerEl;

  this.infinitySwipe = function () {
    this.slidesChanging = setInterval(() => {
      this.onRightButtonClick();
    }, 2000);

    this.sliderContainerEl.addEventListener('mouseover', () => {
      clearInterval(this.slidesChanging);
    });

    this.sliderContainerEl.addEventListener('mouseout', () => {
      this.slidesChanging = setInterval(() => {
        this.onRightButtonClick();
      }, 2000);
    });

    return this;
  };

  this.managingWithButtons = function () {
    buttons.rightButton.addEventListener('click', this.onRightButtonClick.bind(this), false);
    buttons.leftButton.addEventListener('click', this.onLeftButtonClick.bind(this), false);

    return this;
  };
}
