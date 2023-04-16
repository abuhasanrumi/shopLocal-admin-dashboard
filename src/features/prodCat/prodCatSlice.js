import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import prodCatService from './prodCatService';


export const getProdCats = createAsyncThunk("product-category/get-categories", async (thunkAPI) => {
    try {
        return await prodCatService.getProdCats();
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const initialState = {
    prodCats: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const prodCatSlice = createSlice({
    name: "prodCats",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProdCats.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProdCats.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.prodCats = action.payload;
            })
            .addCase(getProdCats.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default prodCatSlice.reducer;
