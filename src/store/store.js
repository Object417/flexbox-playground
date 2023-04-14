import { configureStore } from "@reduxjs/toolkit"
import flexboxReducer from "./slices/flexboxSlice"
import themeReducer from "./slices/themeSlice"

const store = configureStore({
  reducer: {
    flexbox: flexboxReducer,
    theme: themeReducer
  }
})

export default store
