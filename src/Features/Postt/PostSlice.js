import { createSlice } from "@reduxjs/toolkit";


const postSlice=createSlice({
    name: 'PostSlice',
  initialState: {
    counter: 0,
    data1: [{name:"akula chandu",vill:"sindole",phn:'7287992929'},
    {name:"akula srikanth",vill:"sindole",phn:'9347810301'}],
    todos: [],
  },
  reducers: {
    Increment: (state) => {
      state.counter += 1;
    },
    uploadpost:(state,action)=>{
        console.log(action.payload);
        state.data1.push(action.payload);
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});
export const {uploadpost,Increment}=postSlice.actions;

export default postSlice.reducer;
