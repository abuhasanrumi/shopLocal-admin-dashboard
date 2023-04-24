'use client'

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const getUserFromLocalStorage = localStorage.getItem("user") ?
    JSON.parse(localStorage.getItem("user"))
    : null;

const initialState = {
    user: getUserFromLocalStorage,
    order: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""
}

export const login = createAsyncThunk('auth/admin-login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const getAllOrder = createAsyncThunk("order/get-all-orders", async (thunkAPI) => {
    try {
        return await authService.getAllOrder();
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.user = null
            })
            .addCase(getAllOrder.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllOrder.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.order = action.payload;
            })
            .addCase(getAllOrder.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            })
    }
})

export default authSlice.reducer