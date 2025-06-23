import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const sendContactForm = (data) => {
  return axios.post(`${API_URL}/contact`, data);
};
