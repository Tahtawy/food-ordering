import axios from "axios";

const Repository = axios.create({
  baseURL: process.env.VUE_APP_BASEURL
});

export default Repository;
