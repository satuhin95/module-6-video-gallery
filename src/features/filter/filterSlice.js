import { createSlice, } from "@reduxjs/toolkit";


const initialState ={
    tags:[],
    search:'',
    author:'',
};


const filterSlice = createSlice({
    name:"filter",
    initialState,
    reducers:{
        tagSelected:(state, action)=>{
            state.tags.push(action.payload)
        },
        tagRemoved:(state,action)=>{
            const indexToRemove = state.tags.indexOf(action.payload);
            if(indexToRemove !== -1){
                state.tags.splice(indexToRemove,1);
            }
        },
        searched:(state,action)=>{
            state.search = action.payload;
        },
        authorSearched:(state,action)=>{
            state.author = action.payload;
        },
        resetFilter:(state)=>{
            state.author = '';
            state.tags = [];
            state.search = '';
        }
    }

});
export default filterSlice.reducer;
export const {tagRemoved,tagSelected,searched,authorSearched,resetFilter} = filterSlice.actions;