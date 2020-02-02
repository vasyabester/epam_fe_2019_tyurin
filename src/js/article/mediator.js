/* eslint-disable */
import {appendAuthorsButtonsInTop, appendAuthorsButtonsAside} from './article';


export function rightButtonClicked(authorName) {
  const triggerButton = $('.articles__left-side').find(`button:contains(${authorName})`);

  triggerButton.trigger('click', false);
}

export function leftButtonClicked(authorName) {
  const triggerButton = $('.articles__right-side').find(`button:contains(${authorName})`);

  triggerButton.trigger('click', false);
}
/* eslint-enable */
