import { createSlice } from '@reduxjs/toolkit'
import { api } from '../services'
 
const initialState = {
  errors: false,
  success: false,
}

export const ShopSlice = createSlice({
  name: 'Mail',
  initialState,

  reducers: {
    setEmailStatus: (state, action) => {
      state.success = action.payload;
      state.errors = action.payload;
    },
  },

  extraReducers: builder => {
    builder.addMatcher(api.endpoints.sendEmail.matchFulfilled, (state, action) => {
      state.errors = action.payload['errors'];
      state.success =  action.payload['success'];
      
    })   
  },
})

export const {setEmailStatus } = ShopSlice.actions
export default ShopSlice.reducer