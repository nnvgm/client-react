import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.BASE_API_URL || 'http://localhost:5000',
});

export default instance;
