import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentLanguage: 'lv',
}

export const ShopSlice = createSlice({
  name: 'Setting',
  initialState,

  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
})


export const { setLanguage } = ShopSlice.actions
export  {initialState}
export default ShopSlice.reducer