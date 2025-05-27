import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/user/userSlice'
import detailSlice from './user/detailSlice'
export const store = configureStore({
    reducer: {
        user: userReducer,
        detail: detailSlice
    }
})