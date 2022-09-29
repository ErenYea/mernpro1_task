import axios from "axios";

const instance = axios.create({
  baseURL: "https://mern-task-backend-v2.herokuapp.com",
  // baseURL: "http://localhost:9000",
  // baseURL: "https://glacial-wildwood-37195.herokuapp.com",
});

export default instance;
