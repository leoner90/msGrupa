import { createSlice } from '@reduxjs/toolkit'
import { api } from '../services'

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

export const ShopSlice = createSlice({
  name: 'SliderImg',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(api.endpoints.getGallery.matchFulfilled, (state, action) => { 
      state.allImages = action.payload;
    })   
  },
})

export default ShopSlice.reducer