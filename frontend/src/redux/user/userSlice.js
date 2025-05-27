import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false
}

export const userSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    changeUserStatus: (state) => {
      state.value = !state.value
    },
   
  },
})

export const { changeUserStatus } = userSlice.actions

export default userSlice.reducer