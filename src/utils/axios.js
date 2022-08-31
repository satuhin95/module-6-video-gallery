import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://react-video-gallery.herokuapp.com/api",
});

export default axiosInstance;