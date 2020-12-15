import axios from "axios";

const instance = axios.create({
    // The API (cloud function) URL
    baseURL: "https://us-central1-clone-b9d4c.cloudfunctions.net/api"

    // http://localhost:5001/clone-b9d4c/us-central1/api



});

export default instance;
