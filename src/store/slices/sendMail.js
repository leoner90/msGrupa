import { createSlice } from '@reduxjs/toolkit'
import { api } from '../services'
 
//init
const initialState = {
  errors: false,
  success: false,
}
 
//change
export const ShopSlice = createSlice({
  name: 'Mail',
  initialState,
  //local manipulation
  reducers: {
    setEmailStatus: (state, action) => {
      state.success = action.payload;
      state.errors = action.payload;
    },
  },
  //to call after mutation e.g. DB call
  extraReducers: builder => {
    builder.addMatcher(api.endpoints.sendEmail.matchFulfilled, (state, action) => {
      state.errors = action.payload['errors'];
      state.success =  action.payload['success'];
      
    })   
  },
})

//export

export const {setEmailStatus } = ShopSlice.actions
export default ShopSlice.reducer
