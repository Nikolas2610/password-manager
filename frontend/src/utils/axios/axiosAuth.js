import axios from 'axios'

const axiosAuth = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'private-app-key': 'Password0Manager', 
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
    },
    error => {
        // Handle any error responses
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log(error.config);
        return Promise.reject(error);
    }
);

export default axiosAuth;

