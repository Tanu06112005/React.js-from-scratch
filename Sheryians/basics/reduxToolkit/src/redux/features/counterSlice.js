import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state)=>{
            state.value+=1;
        },
        decrement: (state)=>{
            state.value-=1;
        },
        incrementByAmount: (state,actions)=>{
            state.value+=actions.payload
        }
    }
})
// agar value pass krte h to vo UI ke through aa rha h action me jo dispatch hua h 
// ab us action pe se us payload ko recieve krte h
export const {increment,decrement, incrementByAmount}=counterSlice.actions;
export default counterSlice.reducer