import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pizzapal-8b9ed-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;