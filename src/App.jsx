import { Container, Typography, Button } from "@mui/material"
import React, { useState } from "react"
import { css, useTheme } from "@emotion/react"
import { useDispatch, useSelector } from "react-redux"
import { themeSelector, toggleThemeMode } from "./store/slices/themeSlice"
import FlexboxPreview from "./components/FlexboxPreview"
import FlexboxControls from "./components/FlexboxControls"

function App() {
  const theme = useTheme()
  const dispatch = useDispatch()

  return (
    <Container
      className="app"
      sx={{
        minHeight: "100vh"
      }}
    >
      <FlexboxPreview />
      <FlexboxControls />
      <Button variant="contained" onClick={() => dispatch(toggleThemeMode())}>
        {theme.palette.mode}
      </Button>
    </Container>
  )
}

export default App
