import  {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/tod/todoSlice.js'

export const store=configureStore({
    reducer:{
        todo:todoReducer,
}}) 

