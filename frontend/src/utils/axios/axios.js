import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'private-app-key': 'Password0Manager'
    }
})

axiosClient.interceptors.response.use(
    response => {
        // Return a successful response back to the calling function
        return response;
    },
    // error => {
    //     // Handle any error responses
    //     if (error.response) {
    //         console.log(error.response.data);
    //         console.log(error.response.status);
    //         console.log(error.response.headers);
    //     } else if (error.request) {
    //         console.log(error.request);
    //     } else {
    //         console.log('Error', error.message);
    //     }
    //     console.log(error.config);
    //     return Promise.reject(error);
    // }
);

export default axiosClient;

