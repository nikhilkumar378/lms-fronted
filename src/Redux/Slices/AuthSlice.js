import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import axiosInstance from "../../Helpers/axiosInstance"
const initialState = {
    isloggedIn: localStorage.getItem('isloggedIn') || false,
    role: localStorage.getItem('role') || "",
    data: localStorage.getItem('data') || {}
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
        const res =  axiosInstance.post("/api/v1/user/register", data);
        toast.promise(res, {
            loading: "Wait! creating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create account"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})


export const login = createAsyncThunk("/auth/login", async (data) => {
    try {
        const res =  axiosInstance.post("/user/login", data);
        toast.promise(res, {
            loading: "Wait! Authentication in progress",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to log in"
        });
        return (await res).data;
    } catch(error) {
        toast.error(error?.response?.data?.message);
    }
})


export const logout = createAsyncThunk("/auth/logout", async ()=>{

    try{
        const res =  axiosInstance.get('/user/logout');
        toast.promise(res, {
            loading: "Wait! Logout in progress",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to log out"
        });
        return (await res).data;

    }catch(error){
        toast.error(error?.response?.data?.message);
    }
})

const AuthSliceReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(login.fulfilled, (state, action)=>{
localStorage.setItem("data", JSON.stringify(action?.payload?.user))
localStorage.setItem("isloggedIn", true)
localStorage.setItem("role", action?.payload?.user?.role)
state.isloggedIn = true
state.data = action?.payload?.user
state.role = action?.payload?.user?.role
    })

    builder.addCase(logout.fulfilled, (state) =>{
        localStorage.clear();
        state.data = {};
        state.isloggedIn = false;
        state.role = "";
    })
  }
});



// export const {} = AuthSliceReducer.actions;

export default AuthSliceReducer.reducer