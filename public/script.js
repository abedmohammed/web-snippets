import { snippets } from './snippets.js';

const generateCard = function (data) {
  let tags = '';

  data.tags.forEach((el) => {
    tags += `<p class="tags--${el}">${el}</p>`;
  });
  return `
    <article class="card">
      <a class="card__link" href="${data.link}/"></a>
      <div class="card__figure">
        <img class="figure__image image-${data.size}" src="${data.link}/final.png" alt="${data.name} image" />
        <div class="figure__cover">
            <div class="cover__shadow"></div>
            <div class="cover__links">
              <a
                href="https://github.com/abedmohammed/web-snippets/tree/main/${data.link}/"
              >
                <img
                  class="links__github links__image"
                  src="public/images/github-icon.svg"
                  alt="Github icon"
                />
              </a>
              <a href="${data.link}/">
                <img
                  class="links__live links__image"
                  src="public/images/external-link-icon.svg"
                  alt="Website link icon"
                />
              </a>
            </div>
          </div>
      </div>
      <div class="card__content">
        <h3 class="content__name">${data.name}</h3>
        <div class="content__tags">
        ${tags}
        </div>
      </div>
    </article>
  `;
};

const populateCards = function () {
  const container = document.querySelector('.card-container');

  snippets.sort((b, a) => Date.parse(a.date) - Date.parse(b.date));

  snippets.forEach((snippet) => {
    const html = generateCard(snippet);
    container.insertAdjacentHTML('beforeend', html);
  });
};

populateCards();
const cards = Array.from(document.querySelectorAll('.card'));

// cards.forEach((card) => {
//   card.addEventListener('click', function (e) {
//     if (e.target.classList.contains('links__image')) return;

//     if (e.shiftKey || e.metaKey) {
//       window.open(`${window.location.href}/${this.dataset.link}`);
//       return;
//     }

//     window.location.href = `/${this.dataset.link}`;
//   });
// });
