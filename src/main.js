import axios from 'axios';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formElem = document.querySelector('.form');

formElem.addEventListener('submit', e => {
  e.preventDefault();
  const searchText = e.target.elements['search-text'].value.trim();
  if (!searchText) return;

  clearGallery();
  showLoader();

  getImagesByQuery(searchText)
    .then(hits => {
      createGallery(hits);
    })
    .catch(error => {
      console.error('Помилка завантаження зображень:', error);
    })
    .finally(() => {
      hideLoader();
    });

  e.target.reset();
});
