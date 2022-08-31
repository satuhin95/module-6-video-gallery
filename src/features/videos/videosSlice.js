import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getVideos } from "./videosApi";

const initialState ={
    videos:[],
    isLoading:false,
    isError:false,
    error:"",
};
// async thunk 
export const fetchVideos = createAsyncThunk('videos/fetchVideos',async({tags,search,author,page})=>{
    const videos = await getVideos(tags,search,author,page);
    return videos;
})

const videosSlice = createSlice({
    name:"videos",
    initialState,

    extraReducers:(builder)=>{
        builder
        .addCase(fetchVideos.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchVideos.fulfilled,(state,action)=>{
            state.isLoading= false;
            state.videos = action.payload;
        })
        .addCase(fetchVideos.rejected,(state, action)=>{
            state.isLoading = false;
            state.videos = [];
            state.isError= true;
            state.error = action.error?.message;
        })
    }
});
export default videosSlice.reducer;
