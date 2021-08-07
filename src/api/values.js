import axios from 'axios';

export default axios.create({
    baseURL: require("https://yellow-box-db.herokuapp.com/values"),
});