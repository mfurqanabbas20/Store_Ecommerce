import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const detailSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserDetails: (state, action) => {
      state.value = action.payload
    },
   
  },
})

export const { changeUserDetails } = detailSlice.actions

export default detailSlice.reducer