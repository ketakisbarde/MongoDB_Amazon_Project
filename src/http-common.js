import axios from "axios";

export default axios.create({
    baseURL : "http://localhost:5000/function", //must be backend server url, all routes come after this
    headers : {
        "Content-type":"application/json"
    }
});