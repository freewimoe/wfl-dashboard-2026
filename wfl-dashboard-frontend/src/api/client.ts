import axios from 'axios';

// Erstelle eine Axios-Instanz mit der Basis-URL des Backends
const client = axios.create({
  baseURL: 'http://localhost:8000/api', // Stelle sicher, dass dies mit deinem Backend-Port übereinstimmt
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add the auth token header to requests
client.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default client;
