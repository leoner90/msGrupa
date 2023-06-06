import { createSlice } from '@reduxjs/toolkit'
import { api } from '../services'
//init
const initialState = {
  errors: [],
  success: 0
}

//change
export const ShopSlice = createSlice({
  name: 'Mail',
  initialState,
  //local manipulation
  reducers: {
    setPlantInHand: (state, action) => {
      state.money = action.payload
    },
  },
  //to call after mutation e.g. DB call
  extraReducers: builder => {
    builder.addMatcher(api.endpoints.sendEmail.matchFulfilled, (state, action) => {
      console.log(action.payload)
      
      if(action.payload === 200) {
        state.errors = [];
        state.success = 200;
      } else {
        state.errors = action.payload;
        state.success = 'error';
      }
      
    })   
  },
})

//export
export const { setPlantInHand } = ShopSlice.actions
export default ShopSlice.reducer
