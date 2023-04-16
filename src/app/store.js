import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import customerReducer from '../features/customers/customerSlice'
import productReducer from '../features/products/productSlice'
import brandReducer from '../features/brand/brandSlice'
import prodCatReducer from '../features/prodCat/prodCatSlice'
import colorReducer from '../features/color/colorSlice'
import blogListReducer from '../features/blogList/blogListSlice'
import blogCatListReducer from '../features/blogCatList/blogCatListSlice'



export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product: productReducer,
        brand: brandReducer,
        prodCat: prodCatReducer,
        color: colorReducer,
        blogList: blogListReducer,
        blogCatList: blogCatListReducer
    }
})

