import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:9000",
  // baseURL: "https://agile-chamber-11438.herokuapp.com",
});

export default instance;
