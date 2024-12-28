import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'userSlice',
    initialState:{
        user:{
            name:'Niraj',
        }
    },
    reducers:{
        setUser:(action, state) =>{
            state.user = action.payload;

        }, 
        removeUser:(state, action) =>{
            state.user =null;
        }
    }
})

export const {removeUser, setUser} = userSlice.actions;

export const userSlicePath = (state) =>state.userSlice.user; 