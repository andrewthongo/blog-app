import Axios from "axios";
const URL = "http://localhost:5000";

export const projectService = {
  getPosts: () => {
    return Axios.get(`${URL}/posts`);
  },
};
