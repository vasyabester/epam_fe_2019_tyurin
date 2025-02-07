/* eslint-disable */
export function renderContactUs(contentEl, data) {
  const sectionEl = document.createElement('section');
  sectionEl.className = 'contact-us';
  sectionEl.id = 'contact';

  const whatNextMap = document.createElement('section');
  whatNextMap.className = 'what-next-map';

  const contactUsContainer = document.createElement('div');
  contactUsContainer.className = 'container';
  whatNextMap.append(contactUsContainer);

  const contactUsRow = document.createElement('div');
  contactUsRow.className = 'row';
  contactUsRow.append(makeWhatWillBeNextEl(), makeFormMapContainerEl(data));

  contactUsContainer.append(contactUsRow);

  sectionEl.append(
    makeHeaderContainer(),
    makeNetworkContainer(),
    whatNextMap
  );

  contentEl.append(sectionEl);
}

/* eslint-enable */
function makeHeaderContainer() {
  const headerContainer = document.createElement('div');
  headerContainer.className = 'container';

  headerContainer.insertAdjacentHTML('beforeend', `
    <div class="row">
        <div class="contact-us__header-container">
          <h1 class="contact-us__header">Contact us</h1>
        </div>
      </div>
      <div class="row">
        <div class="contact-us__container">
          <p class="contact-us__header-text">Put there articles successfully special warrant submit agree what along
            then</p>
        </div>
      </div>
  `);

  return headerContainer;
}

function makeNetworkContainer() {
  const networkContainer = document.createElement('div');
  networkContainer.className = 'container';

  networkContainer.insertAdjacentHTML('beforeend', `
    <div class="row">
        <div class="contact-us__network">
          <span class="contact-us__network-icon contact-us__network-icon--fb"></span>
          <span class="contact-us__network-icon contact-us__network-icon--insta"></span>
          <span class="contact-us__network-icon contact-us__network-icon--ball"></span>
        </div>
        <div class="clear"></div>
        <div class="contact-us__details-container">
          <div class="contact-us__details">
            <span class="contact-us__details-icon"></span>
            <span class="contact-us__details-text">Write us a few words about your project and we will prepare proposal for you  within 24 hours</span>
          </div>
        </div>
      </div>
  `);

  return networkContainer;
}

function makeFormMapContainerEl(data) {
  const formMapContainer = document.createElement('div');
  formMapContainer.className = 'form-map-container';

  const dataForm = document.createElement('form');
  dataForm.className = 'data-form';
  formMapContainer.append(dataForm);
  dataForm.insertAdjacentHTML('beforeend',
    `<label class="data-form__label" for="name">Your name</label>
     <input class="data-form__input" type="text" id="name" pattern="(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)" title="Name should contain 2 words with first capital letter">
     <label class="data-form__label" for="email">Email</label>
     <input class="data-form__input" type="text" id="email" pattern="(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Email must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters">
     <label class="data-form__label data-form__label--password" for="password">Password</label>
     <input class="data-form__input" type="password" id="password" pattern="^(?=.*[a-zA-Z][0-9])(?!.*\\$&$)[a-zA-Z0-9!#$_]{6,10}$" title="Password must contain uppercase, lowercase letters and digits, from 6 to 10 symbols and could consist of !,#,$,_">
     <button type="submit" class="data-form__submit-button">Send message</button>
     <div class="data-form__details">If you need to have a DNA first, just contact us at <span
       class="data-form__details--email">email@gmail.com</span></div>`,
  );

  const formMapContainerMapImage = document.createElement('img');
  formMapContainerMapImage.className = 'form-map-container__map-image';
  formMapContainerMapImage.alt = 'Here must be your map';
  formMapContainerMapImage.src = `${data.map.img}`;
  formMapContainer.append(formMapContainerMapImage);

  return formMapContainer;
}

function makeWhatWillBeNextEl() {
  const whatWillBeNext = document.createElement('section');
  whatWillBeNext.className = 'what-will-be-next';

  const whatWillBeNextHeader = document.createElement('h1');
  whatWillBeNextHeader.className = 'what-will-be-next__header';
  whatWillBeNextHeader.textContent = 'What will be next step?';

  whatWillBeNext.append(
    whatWillBeNextHeader,
    makeWhatWillBeNextFragment(),
  );

  return whatWillBeNext;
}

function makeWhatWillBeNextFragment() {
  const whatWillBeNextFragment = document.createDocumentFragment();

  const whatWillBeNextFirstItem = document.createElement('article');
  whatWillBeNextFirstItem.className = 'what-will-be-next__item';
  whatWillBeNextFirstItem.insertAdjacentHTML('beforeend',
    `<h2 class="what-will-be-next__item-header">1. We’ll prepare a proposal</h2>
     <p class="what-will-be-next__text">Required scope, timeline and apr. price will be included if you provide
      us with detail information about a project.</p>`,
  );

  const whatWillBeNextSecondItem = document.createElement('article');
  whatWillBeNextSecondItem.className = 'what-will-be-next__item';
  whatWillBeNextSecondItem.insertAdjacentHTML('beforeend',
    `<h2 class="what-will-be-next__item-header">2. Together we discuss it</h2>
     <p class="what-will-be-next__text">Let’s get acquainted and discuss all the possible variant and options.
       Google Hangouts or Skype usually wirks great.</p>`,
  );

  const whatWillBeNextThirdItem = document.createElement('article');
  whatWillBeNextThirdItem.className = 'what-will-be-next__item';
  whatWillBeNextThirdItem.insertAdjacentHTML('beforeend',
    `<h2 class="what-will-be-next__item-header">3. Let’s start building</h2>
     <p class="what-will-be-next__text">When the contract is signed and all goals are set we can start the
       first sprint.</p>`,
  );

  whatWillBeNextFragment.append(
    whatWillBeNextFirstItem,
    whatWillBeNextSecondItem,
    whatWillBeNextThirdItem,
  );

  return whatWillBeNextFragment;
}
