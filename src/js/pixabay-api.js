import axios from 'axios';

export async function fetchImages(value, page) {
  const API_KEY = '47411566-1fe68ca00fdccc973e940a4de';
  const params = new URLSearchParams({
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
  });

  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  return response.data;
}