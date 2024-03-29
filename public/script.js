import { snippets } from './snippets.js';

const generateCard = function (data) {
  let tags = '';

  data.tags.forEach((el) => {
    tags += `<p class="tags--${el}">${el}</p>`;
  });
  return `
    <article class="card">
      <a class="card__link" href="${
        data.externalLink ? data.externalLink : data.link
      }"></a>
      <img
        class="card__image image-${data.size}"
        src="${data.link}/final.webp"
        alt="${data.name} image"
      />
      <div class="card__cover">
        <div data-src="${data.link}/final (1).webp" class="cover__blur"></div>
        <div class="cover__shadow"></div>
        <div class="cover__content">
          <h2 class="content__name">${data.name}</h2>
          <div class="content__tags">
            ${tags}
          </div>
        </div>
        <div class="cover__links">
          <a
            href="https://github.com/abedmohammed/${
              data.externalLink
                ? data.link
                : `web-snippets/tree/main/${data.link}`
            }"
          >
            <img
              class="links__github links__image"
              src="public/images/github-icon.svg"
              alt="Github icon"
            />
          </a>
          <a href="${data.externalLink ? data.externalLink : data.link}/">
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

  // snippets.sort((b, a) => Date.parse(a.date) - Date.parse(b.date));
  snippets.sort((b, a) => a.order - b.order);

  snippets.forEach((snippet) => {
    if (window.innerWidth < 768 && snippet.mobile === false) return;

    const html = generateCard(snippet);
    container.insertAdjacentHTML('beforeend', html);
  });
};

const lazyLoading = function () {
  const imgs = document.querySelectorAll('.card__image');

  imgs.forEach((image) => {
    const imageCover = image.nextElementSibling.querySelector('.cover__blur');
    imageCover.src = imageCover.dataset.src;

    image.addEventListener('load', function () {
      imageCover.style.opacity = 0;
      setTimeout(function () {
        imageCover.remove();
      }, 500);
    });
  });
};

const mobileHoverBehaviour = function () {
  if (window.matchMedia('(hover: none)').matches) {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
      const cardLink = card.querySelector('.card__link');
      cardLink.href = '#/';
    });
  }
};

populateCards();
lazyLoading();
mobileHoverBehaviour();
