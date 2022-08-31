import axios from "../../utils/axios"

export const getVideo = async (id)=>{
    const response = await axios.get(`/videos/${id}`);
    return response.data;
}
export const likedVedioInServer = async (id ,video)=>{
    const response = await axios.put(`/videos/${id}`,video);
    return response.data;
}
export const unlikedVedioInServer = async (id ,video)=>{
    const response = await axios.put(`/videos/${id}`,video);
    return response.data;
}

