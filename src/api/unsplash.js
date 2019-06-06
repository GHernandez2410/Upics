import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a09211236a08ad9d76eba5fb3e5bb65da076446aef7b4bb19713d4f93810c8d4'
    }
});