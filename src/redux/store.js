import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { postApi } from '../Services/Post'

export const store = configureStore({
  reducer: {
    [postApi.reducerPath]: postApi.reducer
  },

  middleware: (getDefaultMiddleWare)=>
      getDefaultMiddleWare().concat(postApi.middleware)
  
})


setupListeners(store.dispatch);