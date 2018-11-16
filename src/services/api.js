import axios from 'axios';

const api = axios.create({
    baseURL: 'https://olhoneles.org/api/v0/',
});

export default api;