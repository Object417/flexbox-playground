import React, { StrictMode, useEffect } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "./index.css"
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material"
import {
  Provider as StoreProvider,
  useDispatch,
  useSelector
} from "react-redux"
import store from "./store/store"
import themes from "./store/themes"
import { setThemeMode, themeSelector } from "./store/slices/themeSlice"

function ThemeProviderWrapper({ children }) {
  const dispatch = useDispatch()
  const { mode } = useSelector(themeSelector)
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  useEffect(() => {
    prefersDarkMode && dispatch(setThemeMode("dark"))
  }, [])

  return <ThemeProvider theme={themes[mode]}>{children}</ThemeProvider>
}

let $container = null
function handleContentLoaded(e) {
  if ($container) {
    return
  }

  $container = document.getElementById("root")
  const $root = createRoot($container)
  $root.render(
    <StrictMode>
      <StoreProvider store={store}>
        <ThemeProviderWrapper>
          <App />
          <CssBaseline />
        </ThemeProviderWrapper>
      </StoreProvider>
    </StrictMode>
  )
}

document.addEventListener("DOMContentLoaded", handleContentLoaded)
