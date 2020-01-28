/* eslint-disable */
export function renderLatestPortfolio(contentEl, data) {
  const sectionEl = document.createElement('section');
  sectionEl.className = 'latest-portfolio';
  sectionEl.id = 'portfolio';

  sectionEl.insertAdjacentHTML('afterbegin', `
    <div class="container">
      <div class="row">
        <div class="latest-portfolio__header-container">
          <h1 class="latest-portfolio__header">Latest portfolio</h1>
        </div>
      </div>
      <div class="row">
        <div class="latest-portfolio__container">
          <p class="latest-portfolio__header-text">Put there articles successfully special warrant submit agree what
            along then</p>
        </div>
      </div>
    </div>
  `);

  const latestPortfolioContainer = document.createElement('div');
  latestPortfolioContainer.className = 'container latest-portfolio__slider-container';
  sectionEl.append(latestPortfolioContainer);

  const latestPortfolioRowImageContainer = document.createElement('div');
  latestPortfolioRowImageContainer.className = 'row latest-portfolio__images-container';

  for (let i = 0; i < 3; i++){
    const latestPortfolioItemContainer = document.createElement('div');
    latestPortfolioItemContainer.className = 'latest-portfolio__item-container';
    latestPortfolioRowImageContainer.append(latestPortfolioItemContainer);

    const latestPortfolioItem = document.createElement('div');
    latestPortfolioItem.className = 'latest-portfolio__item';
    latestPortfolioItem.style.backgroundImage = `url("img/latestPortfolio/${data.portfolioList[i].name}.png")`;
    latestPortfolioItemContainer.append(latestPortfolioItem);

    const latestPortfolioItemHeader = document.createElement('span');
    latestPortfolioItemHeader.className = 'latest-portfolio__item-header';
    latestPortfolioItemHeader.textContent = data.portfolioList[i].header;

    const latestPortfolioItemText = document.createElement('span');
    latestPortfolioItemText.className = 'latest-portfolio__item-text';
    latestPortfolioItemText.textContent = data.portfolioList[i].text;

    latestPortfolioItem.append(latestPortfolioItemHeader, latestPortfolioItemText);

  }

  const seeWorksRow = document.createElement('div');
  seeWorksRow.className = 'row';

  latestPortfolioContainer.append(latestPortfolioRowImageContainer, makePaginationRowEl(), seeWorksRow);
  seeWorksRow.append(makeLatestPortfolioRowImageContainerEl());

  contentEl.append(sectionEl);
}
/* eslint-enable */
function makeLatestPortfolioRowImageContainerEl() {
  const latestPortfolioButtonContainer = document.createElement('div');
  latestPortfolioButtonContainer.className = 'latest-portfolio__see-all-world-button-container';

  const latestPortfolioSeeAllWorldButton = document.createElement('button');
  latestPortfolioSeeAllWorldButton.className = 'latest-portfolio__see-all-world-button';
  latestPortfolioSeeAllWorldButton.textContent = 'See all works';
  latestPortfolioButtonContainer.append(latestPortfolioSeeAllWorldButton);

  return latestPortfolioButtonContainer;
}

function makePaginationRowEl() {
  const paginationRow = document.createElement('div');
  paginationRow.className = 'row';

  const beforePaginationsClear = document.createElement('div');
  beforePaginationsClear.className = 'clear';

  const afterPaginationsClear = document.createElement('div');
  afterPaginationsClear.className = 'clear';

  paginationRow.append(beforePaginationsClear, makeLatestPortfolioPagination(), afterPaginationsClear);

  return paginationRow;
}

function makeLatestPortfolioPagination() {
  const latestPortfolioPagination = document.createElement('div');
  latestPortfolioPagination.className = 'latest-portfolio__pagination';

  const latestPortfolioPaginationItem = document.createElement('div');
  latestPortfolioPaginationItem.className = 'latest-portfolio__pagination-item latest-portfolio__pagination-item--left';

  const latestPortfolioButtonLeft = document.createElement('span');
  latestPortfolioButtonLeft.className = 'latest-portfolio__button latest-portfolio__button--left';
  latestPortfolioPaginationItem.append(latestPortfolioButtonLeft);

  const latestPortfolioPaginationItemRight = document.createElement('div');
  latestPortfolioPaginationItemRight.className = 'latest-portfolio__pagination-item latest-portfolio__pagination-item--right';

  latestPortfolioPagination.append(latestPortfolioPaginationItem, latestPortfolioPaginationItemRight);

  const latestPortfolioButtonRight = document.createElement('span');
  latestPortfolioButtonRight.className = 'latest-portfolio__button latest-portfolio__button--right';
  latestPortfolioPaginationItemRight.append(latestPortfolioButtonRight);

  return latestPortfolioPagination;
}
