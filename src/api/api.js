import axios from 'axios';
import 'dotenv/config'

const apiUrl = process.env.API_URL;
const apiToken = process.env.API_TOKEN;

const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Authorization': `Bearer ${apiToken}`,
  },
});

export default api;
