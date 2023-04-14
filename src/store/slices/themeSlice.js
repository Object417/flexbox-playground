import { createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light"
  },
  reducers: {
    setThemeMode(state, { payload }) {
      state.mode = payload
    },
    toggleThemeMode(state) {
      state.mode = state.mode === "light" ? "dark" : "light"
    }
  }
})

export function themeSelector(state) {
  return state.theme
}
export const { setThemeMode, toggleThemeMode } = themeSlice.actions
export default themeSlice.reducer
