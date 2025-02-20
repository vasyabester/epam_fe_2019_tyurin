import {getMockedJson} from '../utils';
import {LatestPortfolioSlider} from './models/LatestPortfolioSlider';
import {TestimonialSlider} from './models/TestimonialSlider';
import {renderAboutUs} from './views/mainAboutUsView';
import {renderContactUs} from './views/mainContactUsView';
import {renderLatestPortfolio} from './views/mainLatestPortfolioView';
import {renderLatestPosts} from './views/mainLatestPostsView';
import {renderTestimonials} from './views/mainTestimonialsView';
import '../myJQueryModalPlugin/main';
import {renderAddPostModalWindow} from '../addPostModalWindowView';
import '../newPostController';

initialize();
/* eslint-disable */
function initialize() {
  const data = getMockedJson();
  const quantityOfPhotosOnLatestPortfolio = 3;
  const animationDurationOfTestimonials = 500;

  render(data);

  const latestPortfolioSlider = new LatestPortfolioSlider(data.portfolioList, quantityOfPhotosOnLatestPortfolio);
  const testimonialSlider = new TestimonialSlider(data.testimonials, animationDurationOfTestimonials);

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
  renderAddPostModalWindow();
  showInfoMessage();
}

function showInfoMessage() {
  setTimeout(function(){
    $('body').modalWindowPlugin({
      quantity: 1,
      type: 'info',
      message: 'Subscribe to this blog and be the first to know about updates'
    });
  }, 10000);
}
/* eslint-enable */
