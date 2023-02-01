'use strict';

const generateBtn = document.querySelector('.advice__btn');
const adviceIDText = document.querySelector('#advice-id');
const adviceText = document.querySelector('#generated-advice');

const displayAdvice = function (slipObj) {
  const { id: adviceID, advice: advice } = slipObj;
  adviceIDText.textContent = adviceID;
  adviceText.textContent = advice;
};

const getAdvice = function () {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then((res) => displayAdvice(res.slip));
};

generateBtn.addEventListener('click', function () {
  getAdvice();
});
