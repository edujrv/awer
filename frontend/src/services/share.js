import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const httpClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});
[httpClient].forEach(client => client.interceptors.response.use(response => response));
