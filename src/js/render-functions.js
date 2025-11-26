import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const simplelightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 500,
});

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

function cardTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `     
      <li class="gallery-card">
        <a href="${largeImageURL}" class="gallery-link">
          <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
        </a>
        <div class="gallery-stats">
          <p>Likes: <span class="likes">${likes}</span></p>
          <p>Views: <span class="views">${views}</span></p>
          <p>Comments: <span class="comments">${comments}</span></p>
          <p>Downloads: <span class="downloads">${downloads}</span></p>
        </div>
      </li>`;
}

function cardsTemplate(cards) {
  return cards.map(cardTemplate).join('');
}

export function createGallery(cards) {
  gallery.innerHTML = cardsTemplate(cards);
  simplelightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  if (loader) loader.style.display = 'block';
}

export function hideLoader() {
  if (loader) loader.style.display = 'none';
}
