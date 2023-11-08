import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


let url="https://jsonplaceholder.typicode.com/posts";

export const ApiFetching=createAsyncThunk('api/fetch',async()=>{
    try{
        const response=await fetch(url);
        const Resdata= await response.json();
        return Resdata;
    }
    catch(err){
        return err;
    }

});

const ApiSlice=createSlice({
    name:'apislice',
    initialState:{
        datas:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(ApiFetching.pending,(state)=>{
            console.log("ton is loading pedning.");
            state.loading=true;
        })
        .addCase(ApiFetching.fulfilled,(state,action)=>{
            console.log(action.payload);
            // console.log(state.data1);
            console.log("ton is loading sucess.");
            state.loading=false;
            state.datas=action.payload;
        })
        .addCase(ApiFetching.rejected, (state, action) => {
            console.log("ton is loading rejectt.");
            state.loading = true;
            state.error = action.error.message;
          });
    }


});
export default ApiSlice.reducer;