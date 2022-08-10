import axios from "axios";

export class PostService {
  static async GetByLimitAndPage(limit, page) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    return response;
  }
}