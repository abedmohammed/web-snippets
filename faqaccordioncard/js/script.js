'use strict';

const clear = function (elements) {
  elements.forEach((el) => el.classList.remove('active'));
};

const accordions = document.querySelectorAll('.faq__accordion');

accordions.forEach((accordion) => {
  accordion.addEventListener('click', function (e) {
    const activeAccordion = document.querySelector('.faq__accordion.active');
    const activeElements = document.querySelectorAll('.active');

    //remove all active element styling
    clear(activeElements);

    if (this === activeAccordion) {
      return;
    }

    this.classList.add('active');
    this.querySelector('.bar__chevron').classList.add('active');
    this.querySelector('.bar__question').classList.add('active');
  });
});
