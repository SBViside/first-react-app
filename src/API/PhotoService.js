import axios from "axios";

export class PhotoService {
    static async GetByLimitAndPage(limit, page) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`);
        return response;
    }
    static async GetPhotoById(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
        return response;
    }
    static async GetCommentsByPhotoId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}/comments`);
        return response;
    }
}