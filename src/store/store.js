import {configureStore} from '@reduxjs/toolkit'
import postSlice  from '../Features/Postt/PostSlice';
import ApiSlice from '../Features/Apifetching/ApiSlice';

const store=configureStore({
    reducer:{
        post:postSlice,
        api:ApiSlice,
    }
});

export default store;