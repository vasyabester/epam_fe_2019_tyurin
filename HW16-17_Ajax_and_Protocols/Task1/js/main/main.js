const store = {
  activePortfolioIndexes: [1, 2, 3],
};

initialize();
/* eslint-disable */
function initialize() {
  const data = getMockedJson();

  render(data);
  addEventsToSliderPortfolio(data);
  addSliderAutomaticalyMoveAbility(data);
  addSwipeSliderAbility(data);
}

function render(data) {
  const contentEl = document.getElementById('content');

  renderAboutUs(contentEl, data);
  renderLatestPosts(contentEl, data);
  renderLatestPortfolio(contentEl, data);
  renderTestimonials(contentEl, data);
  renderContactUs(contentEl, data);
  renderAddPostModalWindow();
}
/* eslint-enable */

function addSwipeSliderAbility(data) {
  const sliderContainerEl = document.querySelector('.latest-portfolio').querySelectorAll('.container')[1];
  let clickStartX = 0;

  sliderContainerEl.addEventListener('mousedown', (event) => {
    clickStartX = event.clientX;
  });

  sliderContainerEl.addEventListener('mouseup', (event) => {
    if (event.clientX - clickStartX > 50) {
      onLeftButtonClick(data);
    } else if (event.clientX - clickStartX < -50) {
      onRightButtonClick(data);
    }
  });
}

function addSliderAutomaticalyMoveAbility(data) {
  const sliderContainerEl = document.querySelector('.latest-portfolio').querySelectorAll('.container')[1];

  let slidesChanging = setInterval(() => {
    onRightButtonClick(data);
  }, 2000);

  sliderContainerEl.addEventListener('mouseover', () => {
    clearInterval(slidesChanging);
  });

  sliderContainerEl.addEventListener('mouseout', () => {
    slidesChanging = setInterval(() => {
      onRightButtonClick(data);
    }, 2000);
  });
}

function onRightButtonClick(data) {
  const quantityOfPhotosOnPage = 3;
  const nextElement = appendNextElement(data, 'right');
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
    if (store.activePortfolioIndexes[i] < 10) {
      ++store.activePortfolioIndexes[i];
    } else {
      store.activePortfolioIndexes[i] = 1;
    }

    setTimeout(() => {
      const portfolioItem = data.portfolioList[store.activePortfolioIndexes[i] - 1];
      portfolioListElements[i].style.backgroundImage = `url("img/latestPortfolio/${portfolioItem.name}.png")`;
      portfolioListElements[i].querySelector('.latest-portfolio__item-header').textContent = portfolioItem.header;
      portfolioListElements[i].querySelector('.latest-portfolio__item-text').textContent = portfolioItem.text;

      nextElement.remove();
    }, 500);
  }

  return this;
}

function onLeftButtonClick(data) {
  const quantityOfPhotosOnPage = 3;
  const nextElement = appendNextElement(data, 'left');
  const portfolioListElements = Object.assign([], document.querySelectorAll('.latest-portfolio__item'));

  portfolioListElements.forEach((element) => {
    element.animate([
      {left: '0'},
      {left: '400px'},
    ], {
      duration: 400,
    });
  });

  for (let i = 0; i < quantityOfPhotosOnPage; i++) {
    if (store.activePortfolioIndexes[i] > 1) {
      --store.activePortfolioIndexes[i];
    } else {
      store.activePortfolioIndexes[i] = 10;
    }

    setTimeout(() => {
      nextElement.remove();

      const portfolioListElements = Object.assign([], document.querySelectorAll('.latest-portfolio__item'));
      const portfolioItem = data.portfolioList.find((item) => item.id === store.activePortfolioIndexes[i]);

      portfolioListElements[i].style.backgroundImage = `url("img/latestPortfolio/${portfolioItem.name}.png")`;
      portfolioListElements[i].querySelector('.latest-portfolio__item-header').textContent = portfolioItem.header;
      portfolioListElements[i].querySelector('.latest-portfolio__item-text').textContent = portfolioItem.text;
    }, 400);
  }

  return this;
}

function getNextPortfolioID(side) {
  let nextPortfolioID;

  if (side === 'left') {
    nextPortfolioID = store.activePortfolioIndexes[0] - 1 < 1 ? 10 : store.activePortfolioIndexes[0] - 1;
  } else if (side === 'right') {
    nextPortfolioID = store.activePortfolioIndexes[2] + 1 > 10 ? 1 : store.activePortfolioIndexes[2] + 1;
  }

  return nextPortfolioID;
}

function appendNextElement(data, side) {
  const nextPortfolioID = getNextPortfolioID(side);

  const nextPortfolioItem = data.portfolioList.find((item) => item.id === nextPortfolioID);
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
}

function addEventsToSliderPortfolio(data) {
  const rightButton = document.querySelector('.latest-portfolio__pagination-item--right');
  const leftButton = document.querySelector('.latest-portfolio__pagination-item--left');

  rightButton.addEventListener(
    'click', () => {
      onRightButtonClick(data);
    },
    false);

  leftButton.addEventListener(
    'click', () => {
      onLeftButtonClick(data);
    },
    false);
}
