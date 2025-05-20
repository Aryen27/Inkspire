import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

//Attaching token to request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
    (error) => {
    if (error.response) {
      console.error(`HTTP ${error.response.status}:`, error.response.data);
    } else if (error.request) {
      console.error('No response received from the server:', error.request);
    } else {
      console.error('Something went wrong:', error.message);
    }
    return Promise.reject(error);
  }
)

export default api;