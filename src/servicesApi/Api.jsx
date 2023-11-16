export const PER_PAGE = 12;

export async function fetchImages(page, query) {
  const API_KEY = '39697085-f98d9d9a00fbf9834f0a233e6';
  const BASE_URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
  const response = await fetch(BASE_URL);
  return response.ok
    ? response.json()
    : Promise.reject(new Error('Something went wrong, please try again'));
}