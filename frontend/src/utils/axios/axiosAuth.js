import axios from 'axios'

const axiosAuth = axios.create({
    baseURL:  process.env.REACT_APP_API_URL,
    headers: {
        'private-app-key': process.env.REACT_APP_PRIVATE_APP_KEY
    }
})

axiosAuth.interceptors.request.use(
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

axiosAuth.interceptors.response.use(
    response => {
        // Return a successful response back to the calling function
        return response;
    }
);

export default axiosAuth;

