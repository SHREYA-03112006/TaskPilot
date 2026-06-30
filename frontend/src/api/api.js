import axios from "axios";

const API = axios.create({
  baseURL: "https://taskpilot-backend-8ax3.onrender.com",
});

export default API;