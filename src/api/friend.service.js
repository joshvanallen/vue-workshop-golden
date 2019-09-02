import Axios from "axios";
const apiBaseUrl = "http://localhost:3000/friends";
export default {
  getAll() {
    return Axios.get(`${apiBaseUrl}`);
  },
  get(id) {
    return Axios.get(`${apiBaseUrl}/${id}`);
  },
  update(id, body) {
    return Axios.put(`${apiBaseUrl}/${id}`, body);
  },
  patchFavorite(id, favoriteStatus) {
    return Axios.patch(`${apiBaseUrl}/${id}`, { fav: favoriteStatus });
  },
  delete(id) {
    return Axios.delete(`${apiBaseUrl}/${id}`);
  },
  create(body) {
    return Axios.post(`${apiBaseUrl}`, body);
  }
};
