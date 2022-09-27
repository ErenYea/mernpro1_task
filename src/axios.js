import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:9000",
  baseURL: "https://glacial-wildwood-37195.herokuapp.com",
});

export default instance;
