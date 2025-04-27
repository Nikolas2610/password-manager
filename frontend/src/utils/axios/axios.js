// import { useToast } from '@chakra-ui/react';
import axios from 'axios'

// const toast = useToast();
const axiosClient = axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        'private-app-key': process.env.REACT_APP_PRIVATE_APP_KEY
    }
})

axiosClient.interceptors.response.use(
    response => {
        // Return a successful response back to the calling function
        return response;
    },
);

export default axiosClient;

