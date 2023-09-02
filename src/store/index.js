import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { api } from './services'
import settingsSlice from './slices/settings'
import sendMailSlice from './slices/sendMail'
import sliderImages from './slices/sliderImages'
export const store = configureStore({

  reducer: {
    [api.reducerPath]: api.reducer,
    settings: settingsSlice,
    sendMail: sendMailSlice,
    sliderImages: sliderImages,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    api.middleware,
  ],
  
})

setupListeners(store.dispatch)

export default store;