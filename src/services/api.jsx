import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '32420905-2cf8166f8b67cbc6d543c739c';

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `?q=${query}&key=${API_KEY}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};
