import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentLanguage: 'lv',
}

export const ShopSlice = createSlice({
  name: 'Shop',
  initialState,

  reducers: {
    setLanguage: (state, action) => {
      state.currentLanguage = action.payload;
    },
  },
})

//export
export const { setLanguage } = ShopSlice.actions
export  {initialState}
export default ShopSlice.reducer
