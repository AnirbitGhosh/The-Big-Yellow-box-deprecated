import axios from 'axios';

const  instance = axios.create({
    baseURL: "https://yellow-box-db.herokuapp.com/values",
});

export  default instance;