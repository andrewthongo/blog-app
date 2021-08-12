import Axios from "axios";
const URL = "http://localhost:5000";

export const projectService = {
  getPosts: () => {
    return Axios.get(`${URL}/posts`);
  },
  createPost: (data) => {
    return Axios.post(`${URL}/posts`, data);
  },
  deletePost: (data) => {
    return Axios.post(`${URL}/posts/delete`, data);
  },
  updatePost: (data) => {
    return Axios.post(`${URL}/posts/update`, data);
  },
};
