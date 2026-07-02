import {createSlice} from "@reduxjs/toolkit";


// ye slice is for tracking store me jake ki user authenticated h ki nhi h
// authenticationke time pr user login and logout perform krega 
const initialState= {
    status :false,
    userData:null
}
const authSlice=createSlice({
    name: "authreducers",
    initialState,
    reducers:{
            login:(state,action)=>{
                state.status=true;
                state.userData=actio.payload;  // yaha spread operator k use nhi krna pdta h redux does itself
            },
            logout:(state)=>{
                state.status=false,
                state.userData=null;
            }
    }
})

export const {login, logout} =authSlice.actions
export default authSlice.reducer