import Axios from "axios";
const URL = "http://localhost:5000";

export const projectService = {
  getPosts: () => {
    return Axios.get(`${URL}/posts`);
  },
  createPost: (data) => {
    return Axios.post(`${URL}/posts`, data);
  },
  deletePost: (id) => {
    return Axios.delete(`${URL}/posts/${id}`);
  },
  updatePost: (id, data) => {
    return Axios.put(`${URL}/posts/${id}`, data);
  },
};
