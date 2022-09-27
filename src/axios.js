import axios from "axios";

const instance = axios.create({
  baseURL: "https://agile-chamber-11438.herokuapp.com",
});

export default instance;
