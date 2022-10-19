'use strict';

const ratingPage = document.querySelector('.rating');
const completedPage = document.querySelector('.completed');

const submitBtn = document.querySelector('.rating__submit');
const ratingOpts = document.querySelector('.rating__choices');

const rating = document.querySelector('.user-rating');

let choice;

const clearActive = function () {
  const children = Array.from(ratingOpts.children);
  children.forEach((el) => el.classList.remove('active'));
};

ratingOpts.addEventListener('click', function (e) {
  choice = e.target.classList.contains('rating__choices') ? null : e.target;

  if (!choice) return;

  clearActive();
  choice.classList.add('active');
});

submitBtn.addEventListener('click', function () {
  ratingPage.classList.add('hidden');
  completedPage.classList.remove('hidden');

  rating.innerHTML = choice.innerHTML;
});
