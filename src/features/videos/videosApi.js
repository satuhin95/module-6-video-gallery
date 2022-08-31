import axios from "../../utils/axios"

export const getVideos = async (tags,search,author,page)=>{
    let queryString ='';
    if (tags?.length > 0) {
        queryString += tags.map(tag => `tags_like=${tag}`).join('&')
    }
    if (search !== '') {
        queryString += `&q=${search}`
    }
    if (author !== '') {
        queryString += `&author_like=${author}`
    }
    if (page !== '') {
        queryString += `&_page=${page}&_limit=4`
    }
   

    
    const response = await axios.get(`/videos?${queryString}`);
    return response.data;
}