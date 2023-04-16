import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import blogCatListService from './blogCatListService';

export const getBlogCatList = createAsyncThunk("blogCat/get-blogCategories", async (thunkAPI) => {
    try {
        return await blogCatListService.getBlogCatList();
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const initialState = {
    blogCats: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
};

export const blogCatSlice = createSlice({
    name: "blogCats",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBlogCatList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBlogCatList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.blogCats = action.payload;
            })
            .addCase(getBlogCatList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.error;
            });
    },
});

export default blogCatSlice.reducer;
