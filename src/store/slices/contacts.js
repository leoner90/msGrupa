import { createSlice } from '@reduxjs/toolkit'
import { api } from '../services'
//init
const initialState = {
  phoneNumber: '071818181546',
  location: 'Salford',
  testimonials: [],
  currentLanguage: '',
}

//change
export const ShopSlice = createSlice({
  name: 'Shop',
  initialState,
  //local manipulation
  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
  //to call after mutation e.g. DB call
  extraReducers: builder => {
    builder.addMatcher(api.endpoints.getTestimonials.matchFulfilled, (state, action) => {
      // state.testimonials = JSON.parse(action.payload);
      state.testimonials = action.payload;
    })   
  },
})

//export
export const { setLanguage } = ShopSlice.actions
export default ShopSlice.reducer
