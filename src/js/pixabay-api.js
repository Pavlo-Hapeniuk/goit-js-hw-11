import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function getImagesByQuery(query) {
  const API_KEY = '53374689-de9604de74fdd47daed383deb';

  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(res => {
      if (!res.data.hits || res.data.hits.length === 0) {
        iziToast.error({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          backgroundColor: '#ef4040',
          position: 'topRight',
        });
        return null;
      } else {
        return res.data.hits;
      }
    })
    .catch(error => {
      console.error(error);
    });
}
