import  {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/tod/todoSlice.js'

const store=configureStore({
    reducer:{
        todo:todoReducer
}})

