import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './features/counterSlice'

// store bnao aur use bta do kon kon se slices se kon kon se reducers bne h jo yaha pe store krane h
export const store=configureStore({
    reducer:{
        counter:counterReducer

    }
})
