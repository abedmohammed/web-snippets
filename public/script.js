import { snippets } from './snippets.js';

const generateCard = function (data) {
  let tags = '';

  data.tags.forEach((el) => {
    tags += `<p class="tags--${el}">${el}</p>`;
  });
  return `
    <article class="card">
      <a class="card__link" href="${data.link}/"></a>
      <img
        class="card__image image-${data.size}"
        src="${data.link}/final.png"
        alt="${data.name} image"
      />
      <div class="card__cover">
        <div class="cover__shadow"></div>
        <div class="cover__content">
          <h2 class="content__name">${data.name}</h2>
          <div class="content__tags">
            ${tags}
          </div>
        </div>
        <div class="cover__links">
          <a
            href="https://github.com/abedmohammed/web-snippets/tree/main/${data.link}"
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
