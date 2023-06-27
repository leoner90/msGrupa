import { createSlice } from '@reduxjs/toolkit'
import { api } from '../services'
//init
const initialState = {
  AboutPageSliderImg: [
      { imgName: "slider1.jpeg" },
      { imgName: "slider2.jpeg" },
      { imgName: "slider3.jpeg" },
      { imgName: "slider4.jpeg" },
      { imgName: "slider5.jpeg" }
  ],

  allImages: []
}

//change
export const ShopSlice = createSlice({
  name: 'Shop',
  initialState,
  //local manipulation
  reducers: {

  },
  //to call after mutation e.g. DB call
  extraReducers: builder => {
    builder.addMatcher(api.endpoints.getGallery.matchFulfilled, (state, action) => { 
      state.allImages = action.payload;
    })   
  },
})

//export
export default ShopSlice.reducer
