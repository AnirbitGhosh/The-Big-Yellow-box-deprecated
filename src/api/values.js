import axios from 'axios';

export default axios.create({
    baseURL: "https://yellow-box-db.herokuapp.com/values",
});