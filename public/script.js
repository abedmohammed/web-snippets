import { snippets } from './snippets.js';

const generateCard = function (data) {
  let tags = '';

  data.tags.forEach((el) => {
    tags += `<p class="tags--${el}">${el}</p>`;
  });
  return `
    <article data-link="${data.link}/" class="card">
      <div class="card__figure">
        <img class="figure__image" src="${data.link}/final.png" alt="${data.name} image" />
      </div>
      <div class="card__content">
        <h2 class="content__name">${data.name}</h2>
        <div class="content__tags">
        ${tags}
        </div>
      </div>
    </article>
  `;
};

const populateCards = function () {
  const container = document.querySelector('.container');

  snippets.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

  snippets.forEach((snippet) => {
    const html = generateCard(snippet);
    container.insertAdjacentHTML('beforeend', html);
  });
};

populateCards();
const cards = Array.from(document.querySelectorAll('.card'));

cards.forEach((card) => {
  card.addEventListener('click', function () {
    window.location.href = `/${this.dataset.link}`;
  });
});
