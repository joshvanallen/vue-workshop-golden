import Axios from "axios";
const apiBaseUrl = 'http://localhost:3000'
export default {
    getAllByFriend(friendId){
        return Axios.get(`${apiBaseUrl}/friends/${friendId}/notes`);
    },
    get(id){
        return Axios.get(`${apiBaseUrl}/notes/${id}`);
    },
    update(id, body){
        return Axios.put(`${apiBaseUrl}/notes/${id}`,body);
    },
    delete(id){
        return Axios.delete(`${apiBaseUrl}/notes/${id}`);
    },
    create(friendId, body){
        return Axios.post(`${apiBaseUrl}/friends/${friendId}/notes`, body);
    }
}