import {configureStore} from "@reduxjs/toolkit";
import authSlice from './authSlice'
 const store=configureStore({
    reducer: {
        authreducers : authSlice,
        // also can add more sclices 
    }
})

export default store;