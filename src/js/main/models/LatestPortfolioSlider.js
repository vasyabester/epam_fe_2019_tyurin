import {Slider} from './Slider';

export function LatestPortfolioSlider(portfolioList, quantityOfPhotosOnPage) { // eslint-disable-line
  const latestPortfolioContainer = document.querySelector('.latest-portfolio').querySelectorAll('.container')[1];
  const latestPortfolioButtons = {
    rightButton: document.querySelector('.latest-portfolio__pagination-item--right'),
    leftButton: document.querySelector('.latest-portfolio__pagination-item--left'),
  };

  Slider.call(this, latestPortfolioContainer, latestPortfolioButtons); // eslint-disable-line

  this.activePortfolioIDs = [1, 2, 3];
  this.portfolioList = portfolioList;

  this.onRightButtonClick = function () {
    const nextElement = this.appendNextElement('right');
    const portfolioListElements = Object.assign([], document.querySelectorAll('.latest-portfolio__item'));

    portfolioListElements.forEach((element) => {
      element.animate([
        {left: '0'},
        {left: '-400px'},
      ], {
        duration: 500,
      });
    });

    for (let i = 0; i < quantityOfPhotosOnPage; i++) {
      if (this.activePortfolioIDs[i] < this.portfolioList.length) {
        ++this.activePortfolioIDs[i];
      } else {
        this.activePortfolioIDs[i] = 1;
      }

      setTimeout(() => {
        const portfolioItem = this.portfolioList[this.activePortfolioIDs[i] - 1];
        portfolioListElements[i].style.backgroundImage = `url("img/latestPortfolio/${portfolioItem.name}.png")`;
        portfolioListElements[i].querySelector('.latest-portfolio__item-header').textContent = portfolioItem.header;
        portfolioListElements[i].querySelector('.latest-portfolio__item-text').textContent = portfolioItem.text;

        nextElement.remove();
      }, 500);
    }

    return this;
  };

  this.onLeftButtonClick = function () {
    const nextElement = this.appendNextElement('left');
    const portfolioListElements = Object.assign([], document.querySelectorAll('.latest-portfolio__item'));

    portfolioListElements.forEach((element) => {
      element.animate([
        {left: '0'},
        {left: '400px'},
      ], {
        duration: 500,
      });
    });

    for (let i = 0; i < quantityOfPhotosOnPage; i++) {
      if (this.activePortfolioIDs[i] > 1) {
        --this.activePortfolioIDs[i];
      } else {
        this.activePortfolioIDs[i] = this.portfolioList.length;
      }

      setTimeout(() => {
        nextElement.remove();

        const portfolioListElements = Object.assign([], document.querySelectorAll('.latest-portfolio__item'));
        const portfolioItem = this.portfolioList.find((item) => item.id === this.activePortfolioIDs[i]);

        portfolioListElements[i].style.backgroundImage = `url("img/latestPortfolio/${portfolioItem.name}.png")`;
        portfolioListElements[i].querySelector('.latest-portfolio__item-header').textContent = portfolioItem.header;
        portfolioListElements[i].querySelector('.latest-portfolio__item-text').textContent = portfolioItem.text;
      }, 500);
    }

    return this;
  };

  this.addSwipeSliderAbility = function () {
    const sliderContainerEl = document.querySelector('.latest-portfolio').querySelectorAll('.container')[1];
    let clickStartX = 0;

    sliderContainerEl.addEventListener('mousedown', (event) => {
      clickStartX = event.clientX;
    });

    sliderContainerEl.addEventListener('mouseup', (event) => {
      if (event.clientX - clickStartX > 50) {
        this.onLeftButtonClick();
      } else if (event.clientX - clickStartX < -50) {
        this.onRightButtonClick();
      }
    });

    return this;
  };

  this.getNextPortfolioID = function (side) {
    let nextPortfolioID;

    if (side === 'left') {
      nextPortfolioID = this.activePortfolioIDs[0] - 1 < 1 ? this.portfolioList.length : this.activePortfolioIDs[0] - 1;
    } else if (side === 'right') {
      nextPortfolioID = this.activePortfolioIDs[2] + 1 > this.portfolioList.length ? 1 : this.activePortfolioIDs[2] + 1;
    }

    return nextPortfolioID;
  };

  this.appendNextElement = function (side) {
    const nextPortfolioID = this.getNextPortfolioID(side);
    const nextPortfolioItem = this.portfolioList.find((item) => item.id === nextPortfolioID);
    const nextElement = document.querySelectorAll('.latest-portfolio__item-container')[0].cloneNode(true);

    nextElement.querySelector('.latest-portfolio__item').style.backgroundImage = `url("img/latestPortfolio/${nextPortfolioItem.name}.png")`;
    nextElement.querySelector('.latest-portfolio__item-header').textContent = nextPortfolioItem.header;
    nextElement.querySelector('.latest-portfolio__item-text').textContent = nextPortfolioItem.text;

    const sliderContainerEl = document.querySelector('.latest-portfolio').querySelectorAll('.container')[1].querySelector('.row');

    side === 'right' && sliderContainerEl.append(nextElement);

    if (side === 'left') {
      nextElement.style.position = 'relative';
      nextElement.style.marginLeft = '-386px';

      sliderContainerEl.prepend(nextElement);
    }

    return nextElement;
  };
}
