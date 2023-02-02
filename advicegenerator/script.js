'use strict';

const generateBtn = document.querySelector('.advice__btn');
const adviceIDText = document.querySelector('#advice-id');
const adviceText = document.querySelector('#generated-advice');

const displayLoader = function (display = true) {
  if (display) {
    const html = `
    <div class="advice__loader"></div>
    `;

    document
      .querySelector('.advice__text')
      .insertAdjacentHTML('beforebegin', html);
  } else {
    document.querySelector('.advice__loader').remove();
  }
};

// const displayAdvice = function (slipObj) {
//   const { id: adviceID, advice: advice } = slipObj;
//   displayLoader(false);
//   adviceIDText.textContent = adviceID;
//   adviceText.textContent = advice;
// };

// const getAdvice = function () {
//   displayLoader();
//   fetch('https://api.adviceslip.com/advice')
//     .then((res) => res.json())
//     .then((res) => displayAdvice(res.slip));
// };

const generateAdvice = async function () {
  displayLoader();

  let response = await fetch('https://api.adviceslip.com/advice');
  response = await response.json();
  const { id: adviceID, advice: advice } = response.slip;

  displayLoader(false);
  adviceIDText.textContent = adviceID;
  adviceText.textContent = advice;
};

generateBtn.addEventListener('click', function () {
  generateAdvice();
});
