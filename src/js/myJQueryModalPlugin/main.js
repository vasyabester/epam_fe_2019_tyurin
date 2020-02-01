/* eslint-disable */
(function () {
  $.modalWindowPlugin = function (element, {quantity, type, message, onOkButtonClick}) {
    this.openModal({quantity, type, message, onOkButtonClick});
  };

  $.modalWindowPlugin.prototype = {
    constructor: $.modalWindowPlugin,

    openModal({quantity, type, message, onOkButtonClick}) {
      const footerContent = this.createFooterEl(quantity);
      const modalWindowTemplate = (`
         <div class="blocker-window">
          <div class="modal-window modal-window--${type}">
              <header class="modal-window__header">
                  <span class="glyphicon glyphicon-remove modal-window__close-button" aria-hidden="true"></span>
              </header>
              <div class="modal-window__content">${message}</div>
              <footer class="modal-window__footer">${footerContent}</footer>
          </div>
        </div>
      `);

      this._onOkButtonClick = onOkButtonClick;

      $('body').append(modalWindowTemplate);
      $('.modal-window').on('click', this.onDialogWindowClicked.bind(this));
      $('.blocker-window').one('click', this.onBlockerWindowClicked.bind(this));
      $('body').on('keydown', this.onEscButtonClicked.bind(this));
    },

    onEscButtonClicked(eventObject) {
      if (eventObject.which === 27) {
        this.closeModal();
      }
    },

    onBlockerWindowClicked(event) {
      event.stopPropagation();
      this.closeModal();
    },

    closeModal() {
      $('.modal-window').off('click');
      $('.blocker-window').off('click')
        .remove();
    },

    onDialogWindowClicked(event) {
      event.stopPropagation();

      if (event.target.value === 'Cancel') {
        this.closeModal();
      } else if (event.target.value === 'Ok') {
        this._onOkButtonClick && this._onOkButtonClick();
        this.closeModal();
      } else if ($(event.target).hasClass('modal-window__close-button')) {
        this.closeModal();
      }
    },

    createFooterEl(quantity) {
      let footerContent = '<button class="modal-window__button" value="Ok">Ok</button>';

      if (quantity === 2) {
        footerContent += '<button class="modal-window__button" value="Cancel">Cancel</button>';
      }

      return footerContent;
    },
  };

  $.fn.modalWindowPlugin = function (options) {
    if (this.length === 1) {
      new $.modalWindowPlugin(this, options);
    }
    return this;
  };
})();
/* eslint-enable */
