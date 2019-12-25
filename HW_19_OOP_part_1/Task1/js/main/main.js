initialize();
/* eslint-disable */
function initialize() {
  const data = getMockedJson();
  const quantityOfPhotosOnLatestPortfolio = 3;
  const animationDurationOfTestimonials = 500;
  const latestPortfolioSlider = new LatestPortfolioSlider(data.portfolioList, quantityOfPhotosOnLatestPortfolio);
  const testimonialSlider = new TestimonialSlider(data.testimonials, animationDurationOfTestimonials);

  render(data);

  latestPortfolioSlider.infinitySwipe().managingWithButtons().addSwipeSliderAbility();
  testimonialSlider.infinitySwipe().managingWithButtons();
}

function render(data) {
  const contentEl = document.getElementById('content');

  renderAboutUs(contentEl, data);
  renderLatestPosts(contentEl, data);
  renderLatestPortfolio(contentEl, data);
  renderTestimonials(contentEl, data);
  renderContactUs(contentEl, data);
}
/* eslint-enable */
