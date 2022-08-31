import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { getVideo ,likedVedioInServer,unlikedVedioInServer} from "./videoApi";

const initialState ={
    video:{},
    isLoading:false,
    isError:false,
    error:"",
};
// async thunk 
export const fetchVideo = createAsyncThunk('video/fetchVideo',async(id)=>{
    const video = await getVideo(id);
    return video;
})

const videoSlice = createSlice({
    name:"video",
    initialState,
    reducers:{
        likedVedio:(state, action)=>{
            if(state.video.id===action.payload){
                state.video.likes += 1;
                likedVedioInServer(action.payload,state.video)
            }
        },
        unlikedVedio:(state, action)=>{
            if(state.video.id===action.payload){
                state.video.unlikes += 1;
                unlikedVedioInServer(action.payload,state.video)
            }
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchVideo.pending,(state)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchVideo.fulfilled,(state,action)=>{
            state.isLoading= false;
            state.video = action.payload;
        })
        .addCase(fetchVideo.rejected,(state, action)=>{
            state.isLoading = false;
            state.video = {};
            state.isError= true;
            state.error = action.error?.message;
        })
    }
});
export default videoSlice.reducer;
export const {likedVedio,unlikedVedio} = videoSlice.actions;