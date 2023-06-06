import { createSlice } from '@reduxjs/toolkit'
import { api } from '../services'
//init
const initialState = {
  AboutPageSliderImg: [
      { imgName: "slider1.jpeg" },
      {imgName: "slider2.jpeg" },
      { imgName: "slider3.jpeg" },
      { imgName: "slider4.jpeg" },
      {imgName: "slider5.jpeg" },
  ],

  allImages: [
    {header: "PLAVNIEKI", bodyText: "10 кв", imgName: "project1.jpeg" },
    {header: "BABITE", bodyText: "10 кв", imgName: "project2.jpeg" },
    {header: "SAULKRASTI", bodyText: "10 кв", imgName: "project3.jpeg" },
    {header: "KENGARAGS", bodyText: "12 кв", imgName: "project4.jpeg" },
    {header: "ZASULAUKS", bodyText: "15 кв", imgName: "project5.jpeg" },
    {header: "IMANTA", bodyText: "10 кв", imgName: "project6.jpeg" },
    {header: "ZOLITUDE", bodyText: "10 кв", imgName: "project7.jpeg" },
    {header: "PINKI", bodyText: "30 кв", imgName: "project8.jpeg" },
    {header: "Vangazi", bodyText: "20 кв", imgName: "project9.jpeg" },
    {header: "SAULKRASTI", bodyText: "11 кв", imgName: "project10.jpeg" },
    {header: "PREILI", bodyText: "10 кв", imgName: "project11.jpeg" },
    {header: "OGRE", bodyText: "10 кв", imgName: "project13.jpeg" },
    {header: "VECMILGRAVIS", bodyText: "10 кв", imgName: "project14.jpeg" },
    {header: "OSTA", bodyText: "10 кв", imgName: "project15.jpeg" },
    {header: "KULDIGA", bodyText: "10 кв", imgName: "project16.jpeg" },
    {header: "SIGULDA", bodyText: "10 кв", imgName: "project17.jpeg" },
    {header: "VANGAZI", bodyText: "10 кв", imgName: "project18.jpeg" },
    {header: "LONE", bodyText: "10 кв", imgName: "project19.jpeg" },
    {header: "JEKABPILS", bodyText: "10 кв", imgName: "project20.jpeg" },
    {header: "JELGAVA", bodyText: "10 кв", imgName: "project21.jpeg" },
    {header: "OLAINE", bodyText: "10 кв", imgName: "project22.jpeg" },
    {header: "MADONA", bodyText: "10 кв", imgName: "project23.jpeg" },
    {header: "VECRIGA", bodyText: "10 кв", imgName: "project24.jpeg" },
    {header: "JURMALA", bodyText: "10 кв", imgName: "project25.jpeg" },
    {header: "JURMALA", bodyText: "10 кв", imgName: "project26.jpeg" }  
  ]
}

//change
export const ShopSlice = createSlice({
  name: 'Shop',
  initialState,
  //local manipulation
  reducers: {
    setPlantInHand: (state, action) => {
      state.money = action.payload
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
export const { setPlantInHand } = ShopSlice.actions
export default ShopSlice.reducer
